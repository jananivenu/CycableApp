from rest_framework import serializers

from user.serializers import AuthorSerializer

from incidentReport.models import IncidentReport


class IncidentReportSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = IncidentReport
        fields = ['id', 'description', 'author', 'geolocation', 'use_current_time', 'custom_date',
                  'incident_type']


class SimpleIncidentReportSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = IncidentReport
        fields = ['id', 'description', 'author', 'incident_type']
