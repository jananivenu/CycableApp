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
            serializer = BicycleAccidentSerializer(instance=obj.bicycle_accident.first())
            return serializer.data

    def create(self, validated_data):
        incident_type = validated_data.get('incident_type')
        incident_details_data = validated_data.pop('incident_details', None)

        # Create the IncidentReport instance
        incident_report = IncidentReport.objects.create(**validated_data)

        # Based on the incident_type, create the connected incident model instance
        if incident_type == "bicycle_accident" and incident_details_data:
            bicycle_accident = BicycleAccident.objects.create(incident_report=incident_report, **incident_details_data)
            # You can do additional processing or validation here if needed

        return incident_report


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
