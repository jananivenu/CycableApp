from rest_framework import serializers

from incidentReport.models import BicycleAccident, BicycleTheft, NearMiss, Violations
from incidentReport.models import IncidentReport
from user.serializers import AuthorSerializer


# master serializer

# class IncidentReportSerializer(serializers.ModelSerializer):
#     author = AuthorSerializer(read_only=True)
#     incident_details = serializers.SerializerMethodField()
#
#     class Meta:
#         model = IncidentReport
#         fields = ['id', 'description', 'author', 'geolocation_camera', 'use_current_time', 'custom_date',
#                   'incident_type', 'incident_details']
#
#     def get_incident_details(self, obj):
#         incident_type = obj.incident_type
#         if incident_type == "bicycle_accident":
#             serializer = BicycleAccidentSerializer()
#             return serializer.data
#         elif incident_type == "bicycle_theft":
#             serializer = BicycleTheftSerializer(obj.bicycle_theft)
#             return serializer.data
#         elif incident_type == "near_miss":
#             serializer = NearMissSerializer(obj.near_miss)
#             return serializer.data
#         elif incident_type == "violations":
#             serializer = ViolationsSerializer(obj.violations)
#             return serializer.data


class IncidentReportSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    incident_details = serializers.SerializerMethodField()

    class Meta:
        model = IncidentReport
        fields = ['id', 'description', 'author', 'geolocation_camera', 'use_current_time', 'custom_date',
                  'incident_type', 'incident_details']

    def get_incident_details(self, obj):
        incident_type = obj.incident_type
        if incident_type == "bicycle_accident":
            serializer = BicycleAccidentSerializer(instance=obj.bicycle_accident)
            return serializer.data
        if incident_type == "bicycle_theft":
            serializer = BicycleTheftSerializer(instance=obj.bicycle_theft)
            return serializer.data
        if incident_type == "near_miss":
            serializer = NearMissSerializer(instance=obj.near_miss)
            return serializer.data
        if incident_type == "violations":
            serializer = ViolationsSerializer(instance=obj.violations)
            return serializer.data


# separate serializers:
class BicycleAccidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BicycleAccident
        fields = ['involved_parties', 'was_police_called']


class BicycleTheftSerializer(serializers.ModelSerializer):
    class Meta:
        model = BicycleTheft
        fields = ['was_bicycle_locked']


class NearMissSerializer(serializers.ModelSerializer):
    class Meta:
        model = NearMiss
        fields = ['involved_parties']


class ViolationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Violations
        fields = ['change_to_add']


class SimpleIncidentReportSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = IncidentReport
        fields = ['id', 'description', 'author', 'incident_type']
