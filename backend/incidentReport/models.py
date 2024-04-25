from django.contrib.auth import get_user_model
from django.db import models
from django.utils import timezone

User = get_user_model()

INVOLVED_PARTIES_CHOICES = [
    ('Car', 'Car'),
    ('Bus, trolleybus, tram', 'Bus, trolleybus, tram'),
    ('Commercial vehicle', 'Commercial vehicle'),
    ('Motorcycle', 'Motorcycle'),
    ('Another bicycle', 'Another bicycle'),
    ('Pedestrian', 'Pedestrian'),
    ('E-Scooter', 'E-Scooter'),
    ('Road markings or infrastructure', 'Road markings or infrastructure'),
    ('Other', 'Other'),
]

TYPE_CHOICES = [
    ('bicycle_accident', 'bicycle_accident'),
    ('bicycle_theft', 'bicycle_theft'),
    ('near_miss', 'near_miss'),
    ('violations', 'violations'),
]


class ReportedIncidents(models.Model):
    description = models.TextField(max_length=500)
    latitude = models.FloatField(verbose_name="Latitude")
    longitude = models.FloatField(verbose_name="Longitude")
    address = models.CharField(blank=True, null=True)
    use_current_time = models.BooleanField(default=False)
    custom_date = models.DateTimeField(default=timezone.now, null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    incident_type = models.CharField(choices=TYPE_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if self.use_current_time:
            self.custom_date = timezone.now()
        else:
            self.use_current_time = False  # Set use_current_time to False when it's True
        super(ReportedIncidents, self).save(*args, **kwargs)


class BicycleAccident(models.Model):
    involved_parties = models.CharField(max_length=100, choices=INVOLVED_PARTIES_CHOICES, blank=False)
    was_police_called = models.BooleanField()
    incident_report = models.OneToOneField(ReportedIncidents, on_delete=models.CASCADE, related_name='bicycle_accident',
                                           null=True)


class BicycleTheft(models.Model):
    was_bicycle_locked = models.BooleanField()
    incident_report = models.OneToOneField(ReportedIncidents, on_delete=models.CASCADE, related_name='bicycle_theft',
                                           null=True)


class NearMiss(models.Model):
    involved_parties = models.CharField(max_length=100, choices=INVOLVED_PARTIES_CHOICES)
    incident_report = models.OneToOneField(ReportedIncidents, on_delete=models.CASCADE, related_name='near_miss',
                                           null=True)


class Violations(models.Model):
    change_to_add = models.CharField(max_length=400, blank=True, null=True)
    incident_report = models.OneToOneField(ReportedIncidents, on_delete=models.CASCADE, related_name='violations',
                                           null=True)
