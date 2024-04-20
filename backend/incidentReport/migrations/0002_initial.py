# Generated by Django 5.0.3 on 2024-04-20 22:12

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('incidentReport', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='reportedincidents',
            name='author',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='nearmiss',
            name='incident_report',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='near_miss', to='incidentReport.reportedincidents'),
        ),
        migrations.AddField(
            model_name='images',
            name='incident_report',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='incidentReport.reportedincidents'),
        ),
        migrations.AddField(
            model_name='bicycletheft',
            name='incident_report',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bicycle_theft', to='incidentReport.reportedincidents'),
        ),
        migrations.AddField(
            model_name='bicycleaccident',
            name='incident_report',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bicycle_accident', to='incidentReport.reportedincidents'),
        ),
        migrations.AddField(
            model_name='violations',
            name='incident_report',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='violations', to='incidentReport.reportedincidents'),
        ),
    ]
