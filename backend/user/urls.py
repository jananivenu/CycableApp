from django.urls import path

from backend.user.views import ReadUpdateDeleteMyUserView, RetrieveUserView

urlpatterns = [
    path("me/", ReadUpdateDeleteMyUserView.as_view(), name="View_Self"),
    path("users/<int:user_id>/ ", RetrieveUserView.as_view(), name="View_another_User")
]
