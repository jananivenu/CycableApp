from django.urls import path
from incidentReport.views import ListAllIncidentReportsView, CreateIncidentReportView, ListIncidentReportsByTypeView, \
    ListIncidentReportsByUserView, ReadUpdateDeleteIncidentReportView

urlpatterns = [
    path('', ListAllIncidentReportsView.as_view()),
    path('new/', CreateIncidentReportView.as_view()),
    path('type/<str:incident_type>/', ListIncidentReportsByTypeView.as_view()),
    path('user/<int:user_id>/', ListIncidentReportsByUserView.as_view()),
    path('<int:pk>/', ReadUpdateDeleteIncidentReportView.as_view()),
]
