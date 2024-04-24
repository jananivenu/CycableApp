from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny

from comment.models import Comment
from comment.serializers import CommentSerializer, SimpleCommentSerializer
from rest_framework.response import Response

from incidentReport.models import ReportedIncidents

from project.permissions import IsAdmin, IsSelfOrReadOnly


# /api/comments/user/<int:user_id>/ GET: Get all the comments from a single user

class ListCommentsByUserView(ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Comment.objects.filter(author_id=user_id).order_by('-created_at')


# /api/comments/report/<int:report_id>/ GET: Get all the comments of a report

class ListCommentsByReportView(ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        report_id = self.kwargs['report_id']
        return Comment.objects.filter(incident_report_id=report_id).order_by('-created_at')


# /api/comments/new/<int:report_id>/ POST: Comment on a report by providing the report id
class CreateCommentView(CreateAPIView):
    serializer_class = SimpleCommentSerializer
    queryset = ReportedIncidents.objects.all()
    lookup_url_kwarg = 'report_id'

    def create(self, request, *args, **kwargs):
        report = self.get_object()
        comment = Comment(author=request.user, text=self.request.data['text'], incident_report=report)
        comment.save()
        return Response(self.get_serializer(instance=comment).data)


# /api/comments/<int:comment_id>/ DELETE: Delete the comment by providing the comment id
class ReadUpdateDeleteCommentView(RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'comment_id'
    permission_classes = [IsAdmin | IsSelfOrReadOnly]
