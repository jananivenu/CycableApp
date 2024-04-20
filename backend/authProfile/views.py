from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.generics import CreateAPIView, GenericAPIView

from authProfile.serializers import RegistrationSerializer, ValidationSerializer, PasswordResetSerializer, \
    PasswordResetValidationSerializer
from rest_framework.permissions import AllowAny

from authProfile.models import RegistrationProfile

from project.settings import DEFAULT_FROM_EMAIL
from rest_framework.response import Response
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework_simplejwt.views import TokenObtainPairView

from user.serializers import UserSerializer

User = get_user_model()


class TokenUserObtainView(TokenObtainPairView):
    """
    post:
    Create a new session for a user. Sends back tokens and user.
    """

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        user = User.objects.get(email=request.data['email'])
        req = request
        req.user = user
        user_serializer = UserSerializer(instance=user, context={'request': req})
        res = {
            'user': user_serializer.data,
            **serializer.validated_data
        }

        return Response(res, status=status.HTTP_200_OK)


class RegistrationView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = [AllowAny, ]

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            receiver_email = serializer.data['email']
            new_user = User.objects.get(email=receiver_email)
            act_code = RegistrationProfile.objects.filter(user=new_user).values_list('code', flat=True)[0]
            message = f'Welcome to Cycable App, this is your activation code : {act_code} '
            subject = 'Activation code'
            to_email = [receiver_email]
            send_mail(subject, message, DEFAULT_FROM_EMAIL, to_email, fail_silently=False)
            return Response("Code was generated and sent to your email", status=status.HTTP_201_CREATED)
        else:
            return Response("No email provided", status=status.HTTP_400_BAD_REQUEST)


class RegistrationValidationView(GenericAPIView):
    serializer_class = ValidationSerializer
    permission_classes = [AllowAny, ]

    def patch(self, request, *args, **kwargs):
        data = request.data
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)


class PasswordResetView(GenericAPIView):
    permission_classes = []
    serializer_class = PasswordResetSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.send_password_reset_email()
        return Response(status=status.HTTP_200_OK)


class PasswordResetValidationView(GenericAPIView):
    permission_classes = []
    serializer_class = PasswordResetValidationSerializer

    def patch(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(
            serializer.validated_data,
        )
        return Response(status=status.HTTP_200_OK)
