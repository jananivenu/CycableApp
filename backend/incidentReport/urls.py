from django.urls import path
from incidentReport.views import ListAllIncidentReportsView, ListIncidentReportsByTypeView, \
    ListIncidentReportsByUserView, ReadUpdateDeleteIncidentReportView, CreateIncidentReport

from incidentReport.views import ListAllIncidentReportsByLatLongView

urlpatterns = [
    path('all/', ListAllIncidentReportsView.as_view()),
    path('new/incident/', CreateIncidentReport.as_view()),
    path('type/<str:incident_type>/', ListIncidentReportsByTypeView.as_view()),
    path('user/<int:user_id>/', ListIncidentReportsByUserView.as_view()),
    path('<int:pk>/', ReadUpdateDeleteIncidentReportView.as_view()),
    path('latlong/', ListAllIncidentReportsByLatLongView.as_view())
]
