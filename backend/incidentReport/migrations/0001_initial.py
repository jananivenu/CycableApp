# Generated by Django 5.0.3 on 2024-04-19 14:33

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BicycleAccident',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('involved_parties', models.CharField(choices=[('Car', 'Car'), ('Bus, trolleybus, tram', 'Bus, trolleybus, tram'), ('Commercial vehicle', 'Commercial vehicle'), ('Motorcycle', 'Motorcycle'), ('Another bicycle', 'Another bicycle'), ('Pedestrian', 'Pedestrian'), ('E-Scooter', 'E-Scooter'), ('Road markings or infrastructure', 'Road markings or infrastructure'), ('Other', 'Other')], max_length=100)),
                ('was_police_called', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='BicycleTheft',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('was_bicycle_locked', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='NearMiss',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('involved_parties', models.CharField(choices=[('Car', 'Car'), ('Bus, trolleybus, tram', 'Bus, trolleybus, tram'), ('Commercial vehicle', 'Commercial vehicle'), ('Motorcycle', 'Motorcycle'), ('Another bicycle', 'Another bicycle'), ('Pedestrian', 'Pedestrian'), ('E-Scooter', 'E-Scooter'), ('Road markings or infrastructure', 'Road markings or infrastructure'), ('Other', 'Other')], max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='ReportedIncidents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(max_length=500)),
                ('latitude', models.FloatField(verbose_name='Latitude')),
                ('longitude', models.FloatField(verbose_name='Longitude')),
                ('address', models.CharField()),
                ('use_current_time', models.BooleanField(default=False)),
                ('custom_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('incident_type', models.CharField(choices=[('bicycle_accident', 'bicycle_accident'), ('bicycle_theft', 'bicycle_theft'), ('near_miss', 'near_miss'), ('violations', 'violations')])),
            ],
        ),
        migrations.CreateModel(
            name='Violations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('change_to_add', models.CharField(blank=True, max_length=400)),
            ],
        ),
    ]
