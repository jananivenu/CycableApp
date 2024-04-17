from django.urls import path

from user.views import ReadUpdateDeleteMyUserView, RetrieveUserByPrivacyLevelView

urlpatterns = [
    path("me/", ReadUpdateDeleteMyUserView.as_view(), name="View_Self"),
    path("users/<int:user_id>/", RetrieveUserByPrivacyLevelView.as_view(), name="View_another_User")
]
