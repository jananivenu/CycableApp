from django.http import Http404

from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

from incidentReport.serializers import IncidentReportSerializer, SimpleIncidentReportSerializer

from incidentReport.models import ReportedIncidents, BicycleAccident, BicycleTheft, NearMiss, Violations
from project.permissions import IsAuthor, IsAdmin


# GET /api/reports: Retrieve/ list ALL incident reports.
class ListAllIncidentReportsView(ListAPIView):
    queryset = ReportedIncidents.objects.all()
    serializer_class = SimpleIncidentReportSerializer


#
class CreateIncidentReport(CreateAPIView):
    serializer_class = IncidentReportSerializer
    queryset = ReportedIncidents.objects.all()

    def perform_create(self, serializer):
        incident_type = self.request.data.get("incident_type")
        if incident_type == 'bicycle_accident':
            serializer.save(author=self.request.user)
            involved_parties = self.request.data.get("involved_parties")
            was_police_called = self.request.data.get("was_police_called")
            bicycle_accident = BicycleAccident.objects.create(incident_report=serializer.instance,
                                                              involved_parties=involved_parties,
                                                              was_police_called=was_police_called)

        elif incident_type == 'bicycle_theft':
            serializer.save(author=self.request.user)
            was_bicycle_locked = self.request.data.get("was_bicycle_locked")
            bicycle_theft = BicycleTheft.objects.create(incident_report=serializer.instance,
                                                        was_bicycle_locked=was_bicycle_locked)

        elif incident_type == 'near_miss':
            serializer.save(author=self.request.user)
            involved_parties = self.request.data.get("involved_parties")
            near_miss = NearMiss.objects.create(incident_report=serializer.instance,
                                                involved_parties=involved_parties)
        elif incident_type == 'violations':
            serializer.save(author=self.request.user)
            change_to_add = self.request.data.get("change_to_add")
            violations = Violations.objects.create(incident_report=serializer.instance,
                                                   change_to_add=change_to_add)
        else:
            raise Http404('Invalid incident type')


class ListIncidentReportsByTypeView(ListAPIView):
    serializer_class = SimpleIncidentReportSerializer

    def get_queryset(self):
        incident_type = self.kwargs['incident_type']

        # Filter based on the incident type
        if incident_type == 'bicycle_accident':
            return ReportedIncidents.objects.filter(incident_type='bicycle_accident')
        elif incident_type == 'bicycle_theft':
            return ReportedIncidents.objects.filter(incident_type='bicycle_theft')
        elif incident_type == 'near_miss':
            return ReportedIncidents.objects.filter(incident_type='near_miss')
        elif incident_type == 'violations':
            return ReportedIncidents.objects.filter(incident_type='violations')
        else:
            raise Http404('Invalid incident type')


# /api/reports/user/<int:user_id>/ GET: Get all the reports created by a specific user in chronological order
class ListIncidentReportsByUserView(ListAPIView):
    serializer_class = IncidentReportSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return ReportedIncidents.objects.filter(author_id=user_id).order_by('-custom_date')


# /api/reports/<int:id>/ GET: Get the details of a report by providing the id
# /api/reports/<int:id>/ PATCH: Update a report by id (allowed only for owner or admin)
# /api/reports/<int:id>/ DELETE: Delete a report by id (allowed only for owner or admin)


class ReadUpdateDeleteIncidentReportView(RetrieveUpdateDestroyAPIView):
    queryset = ReportedIncidents.objects.all()
    serializer_class = IncidentReportSerializer
    # add permission for 'uni/city councils/managers'?
    permission_classes = [IsAuthor | IsAdmin]
