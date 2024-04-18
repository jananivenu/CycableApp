from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [ 'username', 'first_name', 'last_name', 'location',
                  'profile_description', 'avatar', 'joined_date','cover_photo']

        read_only_fields = ['email']


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'username']



class UserPrivateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name', 'avatar','cover_photo']

        read_only_fields = ['email']

class UserAnonymousSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        return {'message': 'Anonymous user/ User locked their profile from viewing.!!!'}




