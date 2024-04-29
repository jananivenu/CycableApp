from django.http import Http404
from django.utils import timezone
from django.db.models import F
from django.db.models.functions import Cos, Sin, ACos, Radians
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

from incidentReport.serializers import IncidentReportSerializer, SimpleIncidentReportSerializer

from incidentReport.models import ReportedIncidents, BicycleAccident, BicycleTheft, NearMiss, Violations
from project.permissions import IsSelfOrReadOnly, IsAdmin
from rest_framework.permissions import AllowAny


# GET /api/reports: Retrieve/ list ALL incident reports.
class ListAllIncidentReportsView(ListAPIView):
    serializer_class = SimpleIncidentReportSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = ReportedIncidents.objects.all()
        start_date = self.request.query_params.get('start')
        end_date = self.request.query_params.get('end')
        latitude = self.request.query_params.get('latitude')
        longitude = self.request.query_params.get('longitude')
        if start_date and end_date:
            start_datetime = timezone.make_aware(timezone.datetime.strptime(start_date, '%Y-%m-%d'))
            end_datetime = timezone.make_aware(timezone.datetime.strptime(end_date, '%Y-%m-%d'))
            #  to include the end of the day
            end_datetime = end_datetime.replace(hour=23, minute=59, second=59, microsecond=999999)
            queryset = queryset.filter(custom_date__range=(start_datetime, end_datetime))
        elif start_date:
            start_datetime = timezone.make_aware(timezone.datetime.strptime(start_date, '%Y-%m-%d'))
            queryset = queryset.filter(custom_date__gte=start_datetime)
        elif end_date:
            end_datetime = timezone.make_aware(timezone.datetime.strptime(end_date, '%Y-%m-%d'))
            #  to include the end of the day
            end_datetime = end_datetime.replace(hour=23, minute=59, second=59, microsecond=999999)
            queryset = queryset.filter(custom_date__lte=end_datetime)
        elif latitude and longitude:
            latitude = float(self.request.GET.get('latitude'))
            longitude = float(self.request.GET.get('longitude'))
            radius = float(self.request.GET.get('radius', 10))
            distance_expression = (
                    ACos(Cos(Radians(latitude)) * Cos(Radians(F('latitude'))) *
                         Cos(Radians(F('longitude')) - Radians(longitude)) + Sin(Radians(latitude)) * Sin(
                        Radians(F('latitude')))) * 6371
            )
            queryset = ReportedIncidents.objects.annotate(distance=distance_expression).filter(distance__lte=radius)
        else:
            pass

        return queryset


class ListAllIncidentReportsByLatLongView(ListAPIView):
    serializer_class = SimpleIncidentReportSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        min_lat = float(self.request.GET.get('minLat'))
        max_lat = float(self.request.GET.get('maxLat'))
        min_lng = float(self.request.GET.get('minLng'))
        max_lng = float(self.request.GET.get('maxLng'))
        return ReportedIncidents.objects.filter(latitude__gte=min_lat, latitude__lte=max_lat, longitude__gte=min_lng,
                                                longitude__lte=max_lng)


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
    permission_classes = [AllowAny]

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
    serializer_class = SimpleIncidentReportSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return ReportedIncidents.objects.filter(author_id=user_id).order_by('-custom_date')


# /api/reports/<int:id>/ GET: Get the details of a report by providing the id
# /api/reports/<int:id>/ PATCH: Update a report by id (allowed only for owner or admin)
# /api/reports/<int:id>/ DELETE: Delete a report by id (allowed only for owner or admin)
# comment to push


class ReadUpdateDeleteIncidentReportView(RetrieveUpdateDestroyAPIView):
    queryset = ReportedIncidents.objects.all()
    serializer_class = IncidentReportSerializer
    # add permission for 'uni/city councils/managers'?
    permission_classes = [IsAdmin | IsSelfOrReadOnly]
