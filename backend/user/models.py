from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    return f'{instance.id}/{filename}'


class User(AbstractUser):
    PRIVACY_CHOICES = [
        ('show_all', 'Show All'),
        ('only_show_info', 'Show Profile Info, Don\'t Show Reports'),
        ('hide_profile', 'Hide Profile'),
    ]

    GENDER_CHOICES = [
        ("M", 'Male'),
        ("F", 'Female'),
        ("N", 'NA'),
        ("D", 'Diverse')
    ]
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    email = models.EmailField(unique=True)
    first_name = models.CharField(
        verbose_name='first name',
        max_length=200,
        blank=True,
    )
    last_name = models.CharField(
        verbose_name='last name',
        max_length=200,
        blank=True,
    )
    is_staff = models.BooleanField(
        verbose_name='staff status',
        default=False,
        help_text='Designates whether the user can log into this site.',
    )
    is_active = models.BooleanField(
        verbose_name='active',
        default=True,
        help_text='Designates whether this user should be treated as active. '
                  'Unselect this instead of deleting accounts.'
    )
    location = models.CharField(
        max_length=200,
        blank=True
    )
    phone = models.CharField()
    profile_description = models.CharField(
        max_length=1000,
        blank=True
    )
    joined_date = models.DateTimeField(
        verbose_name='date joined',
        auto_now_add=True
    )
    updated_date = models.DateTimeField(
        verbose_name='date_updated',
        auto_now=True
    )
    birth_date = models.DateField(
        verbose_name='user_birthday',
        default="2000-01-01",
        null=False
    )
    avatar = models.ImageField(blank=True, null=True, upload_to=user_directory_path)
    gender = models.CharField(
        max_length=1,
        choices=GENDER_CHOICES,
        null=False)
    privacy_level = models.CharField(max_length=20, choices=PRIVACY_CHOICES, default='only_show_info')
    cover_photo = models.ImageField(blank=True, null=True, upload_to=user_directory_path)

    def __str__(self):
        return self.username
