import random

from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

User = get_user_model()


def get_activation_code(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class RegistrationProfile(models.Model):
    CODE_CHOICES = (
        ('RV', 'Registration Validation'),
        ('PR', 'Password Reset'),
    )

    code = models.CharField(default=get_activation_code, max_length=5, unique=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='registration_profile')
    code_type = models.CharField(choices=CODE_CHOICES, default='RV', max_length=2, verbose_name="Code Type")
    code_used = models.BooleanField(default=False, verbose_name="code_used")


@receiver(post_save, sender=User)
def create_registration_profile(sender, instance, created, **kwargs):
    profile, created = RegistrationProfile.objects.get_or_create(user=instance)
    if created:
        profile.save()
