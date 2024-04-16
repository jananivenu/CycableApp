from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, GenericAPIView

from comment.models import Comment
from comment.serializers import CommentSerializer
from rest_framework.response import Response


# /api/comments/user/<int:user_id>/ GET: Get all the comments from a single user

class ListCommentsByUserView(ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Comment.objects.filter(author_id=user_id).order_by('-created_at')


# /api/comments/report/<int:report_id>/ GET: Get all the comments of a report

class ListCommentsByReportView(ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        report_id = self.kwargs['report_id']
        return Comment.objects.filter(incident_report_id=report_id).order_by('-created_at')


# /api/comments/new/<int:report_id>/ POST: Comment on a report by providing the report id
class CreateCommentView(CreateAPIView):
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        report_id = self.kwargs['report_id']
        serializer.save(author_id=self.request.user, report_id=report_id)

    def post(self, request, *args, **kwargs):
        if 'report_id' not in kwargs:
            return Response({'error': 'Report ID not provided'}, status=status.HTTP_400_BAD_REQUEST)
        return self.create(request, *args, **kwargs)


# /api/comments/<int:comment_id>/ DELETE: Delete the comment by providing the comment id
class DeleteCommentView(GenericAPIView):
    queryset = Comment.objects.all()

    def delete(self, request, comment_id, *args, **kwargs):
        comment = get_object_or_404(self.queryset, pk=comment_id)
        comment.delete()
        return Response({'comment deleted'}, status=status.HTTP_204_NO_CONTENT)
