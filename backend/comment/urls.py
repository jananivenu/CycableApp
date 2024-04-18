from django.urls import path

from comment.views import ListCommentsByUserView, ListCommentsByReportView, CreateCommentView, ReadUpdateDeleteCommentView

urlpatterns = [
    path('user/<int:user_id>/', ListCommentsByUserView.as_view()),
    path('report/<int:report_id>/', ListCommentsByReportView.as_view()),
    path('new/<int:report_id>/', CreateCommentView.as_view()),
    path('<int:comment_id>/', ReadUpdateDeleteCommentView.as_view())
]
