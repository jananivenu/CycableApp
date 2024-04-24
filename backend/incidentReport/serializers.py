from rest_framework import serializers

from user.serializers import AuthorSerializer

from incidentReport.models import ReportedIncidents

from incidentReport.models import BicycleAccident

from incidentReport.models import NearMiss, BicycleTheft, Violations

from incidentReport.images_model import Images


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ['images']


class IncidentReportSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    incident_details = serializers.SerializerMethodField()
    images = ImageSerializer(many=True, required=False)

    class Meta:
        model = ReportedIncidents
        fields = ['id', 'description', 'longitude', 'latitude', 'address', 'use_current_time', 'custom_date',
                  'incident_type', 'incident_details', 'images', 'author', 'created_at']

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

    def create(self, validated_data):
        images_data = self.context.get('request').FILES.getlist('images')
        incident_report = ReportedIncidents.objects.create(**validated_data)

        for image in images_data:
            Images.objects.create(incident_report=incident_report, images=image)
        return incident_report


class SimpleIncidentReportSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = ReportedIncidents
        fields = ['id', 'description', 'author', 'longitude', 'latitude', 'address', 'use_current_time', 'custom_date',
                  'incident_type', 'images', 'created_at']


class BicycleAccidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BicycleAccident
        fields = ['involved_parties', 'was_police_called', ]


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
# testing comment
