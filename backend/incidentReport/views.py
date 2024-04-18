from django.http import Http404
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

from incidentReport.models import IncidentReport, BicycleAccident, BicycleTheft, NearMiss, Violations
from incidentReport.serializers import IncidentReportSerializer, BicycleAccidentSerializer, BicycleTheftSerializer, \
    NearMissSerializer, ViolationsSerializer
from project.permissions import IsAuthor, IsAdmin


# GET /api/reports/bicycle_accidents: Retrieve/ list ALL BicycleAccident reports.
class ListAllBicycleAccidentReportsView(ListAPIView):
    queryset = BicycleAccident.objects.all()
    serializer_class = BicycleAccidentSerializer


# GET /api/reports/bicycle_thefts: Retrieve/ list ALL BicycleThefts reports.
class ListAllBicycleTheftsReportsView(ListAPIView):
    queryset = BicycleTheft.objects.all()
    serializer_class = BicycleTheftSerializer


# GET /api/reports/near_miss :Retrieve/ list ALL NearMiss reports.
class ListAllNearMissReportsView(ListAPIView):
    queryset = NearMiss.objects.all()
    serializer_class = NearMissSerializer


# GET /api/reports/violations: Retrieve/ list ALL Violations reports.
class ListAllViolationsReportsView(ListAPIView):
    queryset = Violations.objects.all()
    serializer_class = ViolationsSerializer


# /api/reports/new/bicycle_accident POST: Create a new bicycle_accident report
class CreateBicycleAccidentReportView(CreateAPIView):
    serializer_class = IncidentReportSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
        incident_report_instance = serializer.instance
        bicycleAccident = BicycleAccident.objects.create(incident_report=incident_report_instance)
        bicycleAccident.involved_parties = self.request.get['invovled_parties']
        bicycleAccident.save()


# /api/reports/new/bicycle_theft POST: Create a new bicycle_theft report
class CreateBicycleTheftReportView(CreateAPIView):
    serializer_class = BicycleTheftSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# /api/reports/new/near_miss POST: Create a new near_miss report
class CreateNearMissReportView(CreateAPIView):
    serializer_class = NearMissSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# /api/reports/new/violations POST: Create a new violations report
class CreateViolationsReportView(CreateAPIView):
    serializer_class = ViolationsSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# /api/reports/new/ POST: Create a new report
# class CreateIncidentReportView(CreateAPIView):
#     serializer_class = IncidentReportSerializer
#
#     def perform_create(self, serializer):
#         serializer.save(author=self.request.user)
#
#     def post(self, request, *args, **kwargs):
#         # determine the incident type from the request data
#         incident_type = request.data.get('incident_type')
#
#         # Choose serializer based on incident type
#         if incident_type == 'bicycle_accident':
#             serializer_class = BicycleAccidentSerializer
#         elif incident_type == 'bicycle_theft':
#             serializer_class = BicycleTheftSerializer
#         elif incident_type == 'near_miss':
#             serializer_class = NearMissSerializer
#         elif incident_type == 'violations':
#             serializer_class = ViolationsSerializer
#         else:
#             raise ValidationError({"incident_type": "Invalid or missing incident type."})
#
#         serializer = serializer_class(data=request.data)
#         if serializer.is_valid():
#             serializer.save(author=self.request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# /api/reports/type/<str:incident_type>/ GET: Get all the reports by type of incident
# class ListIncidentReportsByTypeView(ListAPIView):
#     serializer_class = IncidentReportSerializer
#
#     def get_queryset(self):
#         incident_type = self.kwargs['incident_type']
#
#         # Filter based on the incident type
#         if incident_type == 'bicycle_accident':
#             return BicycleAccident.objects.all()
#         elif incident_type == 'bicycle_theft':
#             return BicycleTheft.objects.all()
#         elif incident_type == 'near_miss':
#             return NearMiss.objects.all()
#         elif incident_type == 'violations':
#             return Violations.objects.all()
#         else:
#             raise Http404('Invalid incident type')


class ListIncidentReportsByTypeView(ListAPIView):

    def get_queryset(self):
        incident_type = self.kwargs['incident_type']
        serializer_class = None

        # Filter based on the incident type
        if incident_type == 'bicycle_accident':
            serializer_class = BicycleAccidentSerializer
            queryset = BicycleAccident.objects.all()
        elif incident_type == 'bicycle_theft':
            serializer_class = BicycleTheftSerializer
            queryset = BicycleTheft.objects.all()
        elif incident_type == 'near_miss':
            serializer_class = NearMissSerializer
            queryset = NearMiss.objects.all()
        elif incident_type == 'violations':
            serializer_class = ViolationsSerializer
            queryset = Violations.objects.all()
        else:
            raise Http404('Invalid incident type')

        self.serializer_class = serializer_class
        return queryset


# /api/reports/user/<int:user_id>/ GET: Get all the reports created by a specific user in chronological order
class ListIncidentReportsByUserView(ListAPIView):
    serializer_class = IncidentReportSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return IncidentReport.objects.filter(author_id=user_id).order_by('-custom_date')


# /api/reports/<int:id>/ GET: Get the details of a report by providing the id
# /api/reports/<int:id>/ PATCH: Update a report by id (allowed only for owner or admin)
# /api/reports/<int:id>/ DELETE: Delete a report by id (allowed only for owner or admin)


class ReadUpdateDeleteIncidentReportView(RetrieveUpdateDestroyAPIView):
    queryset = IncidentReport.objects.all()
    serializer_class = IncidentReportSerializer
    # add permission for 'uni/city councils/managers'?
    permission_classes = [IsAuthor | IsAdmin]


class CreateIncidentReport(CreateAPIView):
    serializer_class = IncidentReportSerializer
    queryset = IncidentReport.objects.all()

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
