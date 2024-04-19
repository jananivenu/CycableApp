from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from authProfile.models import RegistrationProfile, get_activation_code

User = get_user_model()


def email_does_not_exist(email):
    try:
        User.objects.get(email=email)
        raise ValidationError("This email is taken. Please try again.")
    except User.DoesNotExist:
        return email


def email_does_exist(email):
    try:
        User.objects.get(email=email)
        return email
    except User.DoesNotExist:
        raise ValidationError('This User does not exist!')


def username_does_not_exist(username):
    try:
        User.objects.get(username=username)
        raise ValidationError('This username is taken. Please try again.')
    except User.DoesNotExist:
        return username


def code_is_valid(code):
    try:
        reg_profile = RegistrationProfile.objects.get(code=code)
        if not reg_profile.code_used:
            return code
        else:
            raise ValidationError('This code has already been used!')
    except RegistrationProfile.DoesNotExist:
        raise ValidationError('This code is not valid!')


class RegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[email_does_not_exist])

    def save(self, **kwargs):
        email = self.validated_data['email']
        new_user = User(username=email, email=email, is_active=False)
        new_user.save()

    class Meta:
        model = User
        fields = ['email']


class ValidationSerializer(serializers.ModelSerializer):
    password_repeat = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    code = serializers.CharField(style={'input_type': int})
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField(required=True, validators=[email_does_exist])
    password = serializers.CharField()
    username = serializers.CharField(required=True, validators=[username_does_not_exist])
    birth_date = serializers.DateField(required=True)
    gender = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = (
            'email', 'username', 'code', 'first_name', 'last_name', 'birth_date', 'gender', 'password',
            'password_repeat')
        extra_kwargs = {'password': {'write_only': True}}

    def save(self, **kwargs):
        user = User.objects.get(email=self.validated_data['email'])
        if user.is_active:
            raise serializers.ValidationError('This user already has an account.')
        else:
            if RegistrationProfile.objects.filter(user=user).values_list('code', flat=True)[0] == self.validated_data['code']:

                user.first_name = self.validated_data['first_name']
                user.last_name = self.validated_data['last_name']
                user.username = self.validated_data['username']
                user.birth_date = self.validated_data['birth_date']
                user.gender = self.validated_data['gender']
                password = self.validated_data['password']
                password_repeat = self.validated_data['password_repeat']
                if password != password_repeat:
                    raise serializers.ValidationError('Passwords do not match, please try again.')
                user.set_password(password)
                user.is_active = True
                user.registration_profile.code_used = True
                user.save()
                user.registration_profile.save()
                return user
            else:
                raise serializers.ValidationError('The code is not valid. Please try again.')


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True, validators=[email_does_exist], label='Password reset email')

    def send_password_reset_email(self):
        email = self.validated_data.get('email')
        user = User.objects.get(email=email)
        user.save()
        user.registration_profile.code = get_activation_code()
        user.registration_profile.code_used = False
        user.registration_profile.code_type = 'PR'
        user.registration_profile.save()
        receiver_email = email
        message = f'This is the activation code to reset your password: {user.registration_profile.code} '
        subject = 'Password Reset Code'
        to_email = [receiver_email]
        send_mail(subject, message, to_email, fail_silently=False)


class PasswordResetValidationSerializer(serializers.Serializer):
    code = serializers.CharField(label='Validation code', write_only=True, validators=[code_is_valid], required=True)
    email = serializers.EmailField(required=True, validators=[email_does_exist], label='Email')
    password = serializers.CharField(label='Password', write_only=True)
    password_repeat = serializers.CharField(label='Repeat password', write_only=True)

    def validate(self, data):
        code = data.get('code')
        email = data.get('email')
        user = User.objects.get(email=email)
        reg_profile = RegistrationProfile.objects.get(code=code)
        if reg_profile != user.registration_profile:
            raise ValidationError('The code is not sent for this email!')
        if data.get('password') != data.get('password_repeat'):
            raise ValidationError('The passwords do not match!')
        return data

    def save(self, validated_data):
        email = validated_data.get('email')
        updated_user = User.objects.get(email=email)
        updated_user.set_password(validated_data.get('password'))
        updated_user.registration_profile.code_used = True
        updated_user.registration_profile.save()
        updated_user.save()
        return updated_user
