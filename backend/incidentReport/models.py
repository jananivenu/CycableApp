from django.contrib.auth import get_user_model
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
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


class IncidentReport(models.Model):
    description = models.TextField(max_length=500)
    # geolocation = models.PointField()
    geolocation = models.CharField(max_length=100, blank=True)
    use_current_time = models.BooleanField(default=False)
    custom_date = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    incident_type = GenericForeignKey('content_type', 'object_id')

    def save(self, *args, **kwargs):
        if self.use_current_time:
            self.custom_date = timezone.now()
        else:
            self.use_current_time = False  # Set use_current_time to False when it's True
        super(IncidentReport, self).save(*args, **kwargs)


class BicycleAccident(models.Model):
    name = models.CharField(max_length=100, default='bicycle_accident', blank=True, null=True)
    involved_parties = models.CharField(max_length=100, choices=INVOLVED_PARTIES_CHOICES, blank=False)
    was_police_called = models.BooleanField()

    def save(self, *args, **kwargs):
        super(BicycleAccident, self).save(*args, **kwargs)
        IncidentReport.objects.create(content_type=ContentType.objects.get_for_model(self), object_id=self.id)


class BicycleTheft(models.Model):
    name = models.CharField(max_length=100, default='bicycle_theft', blank=True, null=True)
    was_bicycle_locked = models.BooleanField()

    def save(self, *args, **kwargs):
        super(BicycleTheft, self).save(*args, **kwargs)
        IncidentReport.objects.create(content_type=ContentType.objects.get_for_model(self), object_id=self.id)


class NearMiss(models.Model):
    name = models.CharField(max_length=100, default='near_miss', blank=True, null=True)
    involved_parties = models.CharField(max_length=100, choices=INVOLVED_PARTIES_CHOICES)

    def save(self, *args, **kwargs):
        super(NearMiss, self).save(*args, **kwargs)
        IncidentReport.objects.create(content_type=ContentType.objects.get_for_model(self), object_id=self.id)


class Violations(models.Model):
    name = models.CharField(max_length=100, default='violations', blank=True, null=True)
    change_to_add = models.CharField(max_length=400)

    def save(self, *args, **kwargs):
        super(Violations, self).save(*args, **kwargs)
        IncidentReport.objects.create(content_type=ContentType.objects.get_for_model(self), object_id=self.id)
