from rest_framework import serializers

from user.serializers import AuthorCommentSerializer

from comment.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    author = AuthorCommentSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'author', 'text']


class SimpleCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ['id', 'text']
