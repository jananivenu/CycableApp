from django.db import models

from incidentReport.models import IncidentReport


def images_directory_path(instance, filename):
    return f'{instance.incident_report.id}/incidentReports/{filename}'


class Images(models.Model):
    incident_report = models.ForeignKey(IncidentReport, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images_directory_path', blank=True, null=True)
