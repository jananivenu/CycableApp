from django.urls import path
from incidentReport.views import ListAllBicycleAccidentReportsView, ListAllBicycleTheftsReportsView, \
    ListIncidentReportsByTypeView, \
    ListIncidentReportsByUserView, ReadUpdateDeleteIncidentReportView, ListAllNearMissReportsView, \
    ListAllViolationsReportsView, CreateBicycleAccidentReportView, CreateBicycleTheftReportView, \
    CreateNearMissReportView, CreateViolationsReportView

urlpatterns = [
    path('bicycle_accidents/', ListAllBicycleAccidentReportsView.as_view()),
    path('bicycle_thefts/', ListAllBicycleTheftsReportsView.as_view()),
    path('near_miss/', ListAllNearMissReportsView.as_view()),
    path('violations/', ListAllViolationsReportsView.as_view()),
    path('new/bicycle_accident/', CreateBicycleAccidentReportView.as_view()),
    path('new/bicycle_theft/', CreateBicycleTheftReportView.as_view()),
    path('new/near_miss/', CreateNearMissReportView.as_view()),
    path('new/violations/', CreateViolationsReportView.as_view()),
    path('type/<str:incident_type>/', ListIncidentReportsByTypeView.as_view()),
    path('user/<int:user_id>/', ListIncidentReportsByUserView.as_view()),
    path('<int:pk>/', ReadUpdateDeleteIncidentReportView.as_view()),
]
