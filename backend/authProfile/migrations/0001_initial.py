# Generated by Django 5.0.3 on 2024-04-21 15:13

import authProfile.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrationProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default=authProfile.models.get_activation_code, max_length=5, unique=True)),
                ('code_type', models.CharField(choices=[('RV', 'Registration Validation'), ('PR', 'Password Reset')], default='RV', max_length=2, verbose_name='Code Type')),
                ('code_used', models.BooleanField(default=False, verbose_name='code_used')),
            ],
        ),
    ]
