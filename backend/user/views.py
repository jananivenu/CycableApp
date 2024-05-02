from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateDestroyAPIView, get_object_or_404, RetrieveAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from user.serializers import UserSerializer

from project.permissions import IsSelfOrReadOnly

User = get_user_model()


class ReadUpdateDeleteMyUserView(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsSelfOrReadOnly]
    lookup_field = "me"

    def get_object(self):
        user = self.request.user
        obj = get_object_or_404(User, id=user.id)
        self.check_object_permissions(self.request, obj)
        return obj

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)

        self.perform_update(serializer)

        return Response(serializer.data)


class RetrieveUserByPrivacyLevelView(RetrieveAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'

    # def get_serializer_class(self):
    #     user = self.get_object()
    #     if user.privacy_level == "show_all":
    #         return UserSerializer
    #     elif user.privacy_level == "only_show_info":
    #         return UserPrivateSerializer
    #     else:
    #         return UserAnonymousSerializer

    def get_object(self):
        obj = get_object_or_404(User, id=self.kwargs['user_id'])
        self.check_object_permissions(self.request, obj)
        return obj
