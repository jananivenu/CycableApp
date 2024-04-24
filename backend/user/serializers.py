from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'location', 'birth_date', 'gender',
                                                                                         'profile_description',
                  'avatar', 'joined_date', 'cover_photo']

        read_only_fields = ['email']


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'avatar', 'birth_date', 'gender', 'privacy_level']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        if instance.privacy_level == 'hide_profile':
            data = {'username': instance.username}
        else:
            data = super().to_representation(instance)
        return data


class AuthorCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'username', 'birth_date', 'gender', 'privacy_level']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        if instance.privacy_level == 'hide_profile':
            data = {'username': instance.username}
        else:
            data = super().to_representation(instance)
        return data


class UserPrivateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'avatar', 'cover_photo']

        read_only_fields = ['email']


class UserAnonymousSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        return {'message': 'Anonymous user/ User locked their profile from viewing.!!!'}
