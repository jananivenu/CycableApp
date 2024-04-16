from django.http import Http404
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

from incidentReport.serializers import IncidentReportSerializer

from incidentReport.models import IncidentReport, BicycleAccident, BicycleTheft, NearMiss, Violations
from project.permissions import IsAuthor, IsAdmin


# GET /api/reports: Retrieve/ list ALL incident reports.
class ListAllIncidentReportsView(ListAPIView):
    queryset = IncidentReport.objects.all()
    serializer_class = IncidentReportSerializer


# /api/reports/new/ POST: Create a new report
class CreateIncidentReportView(CreateAPIView):
    serializer_class = IncidentReportSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


# /api/reports/type/<str:incident_type>/ GET: Get all the reports by type of incident
class ListIncidentReportsByTypeView(ListAPIView):
    serializer_class = IncidentReportSerializer

    def get_queryset(self):
        incident_type = self.kwargs['incident_type']

        # Filter based on the incident type
        if incident_type == 'bicycle_accident':
            return BicycleAccident.objects.all()
        elif incident_type == 'bicycle_theft':
            return BicycleTheft.objects.all()
        elif incident_type == 'near_miss':
            return NearMiss.objects.all()
        elif incident_type == 'violations':
            return Violations.objects.all()
        else:
            raise Http404('Invalid incident type')


# /api/reports/user/<int:user_id>/ GET: Get all the reports created by a specific user in chronological order
class ListIncidentReportsByUserView(ListAPIView):
    serializer_class = IncidentReportSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return IncidentReport.objects.filter(author_id=user_id).order_by('-custom_date')


''' 
/api/reports/<int:id>/ GET: Get the details of a report by providing the id 
/api/reports/<int:id>/ PATCH: Update a report by id (allowed only for owner or admin)
/api/reports/<int:id>/ DELETE: Delete a report by id (allowed only for owner or admin)
'''


class ReadUpdateDeleteIncidentReportView(RetrieveUpdateDestroyAPIView):
    queryset = IncidentReport.objects.all()
    serializer_class = IncidentReportSerializer
    # add permission for 'uni/city councils/managers'?
    permission_classes = [IsAuthor | IsAdmin]
