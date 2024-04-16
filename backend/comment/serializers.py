from rest_framework import serializers

from user.serializers import AuthorSerializer

from comment.models import Comment

from incidentReport.serializers import SimpleIncidentReportSerializer


class CommentSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    incident_report = SimpleIncidentReportSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'author', 'text', 'incident_report']


class SimpleCommentSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'author', 'text']
