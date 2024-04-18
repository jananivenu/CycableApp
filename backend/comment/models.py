from django.contrib.auth import get_user_model
from django.db import models

from incidentReport.models import ReportedIncidents

User = get_user_model()


class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    incident_report = models.ForeignKey(to=ReportedIncidents, on_delete=models.CASCADE)
    text = models.TextField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.author} commented on {self.incident_report.incident_type}: {self.text}'
