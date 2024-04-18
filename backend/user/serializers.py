from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'location', 'phone',
                  'profile_description', 'avatar', 'joined_date']

        read_only_fields = ['email']


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'gender', 'birth_date']


class AuthorCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']
