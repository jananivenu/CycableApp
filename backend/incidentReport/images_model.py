from django.db import models

from incidentReport.models import ReportedIncidents


def images_directory_path(instance, filename):
    return f'{instance.incident_report.id}/incidentReports/{filename}'


class Images(models.Model):
    incident_report = models.ForeignKey(ReportedIncidents, on_delete=models.CASCADE, related_name='images', blank=True,
                                        null=True)
    images = models.ImageField(upload_to='images_directory_path', blank=True, null=True)
