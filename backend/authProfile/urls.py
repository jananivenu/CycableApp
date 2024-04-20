from django.urls import path

from authProfile.views import RegistrationView, RegistrationValidationView, PasswordResetView, \
    PasswordResetValidationView, TokenUserObtainView
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path("registration/", RegistrationView.as_view()),
    path("registration/validation/", RegistrationValidationView.as_view()),
    path('password-reset/', PasswordResetView.as_view(), name='password-reset'),
    path('password-reset/validate/', PasswordResetValidationView.as_view(), name='password-reset-validation'),
    path('token/', TokenUserObtainView.as_view(), name='retrieve-token-and-user'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),

]
