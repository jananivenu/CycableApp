from rest_framework import permissions
from rest_framework.permissions import BasePermission


class IsAuthor(BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user == obj.author


class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_staff)


class IsSelfOrReadOnly(BasePermission):
    """
        Custom permission to only allow users to edit their own profile.
        """

    def has_object_permission(self, request, view, obj):
        if request.method in ['GET', 'HEAD', 'OPTIONS']:
            return True

        return obj == request.user


class IsNotOwner(BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.user != request.user


class IsOwnerOrReadOnly(BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.user == request.user


class IsSelf(BasePermission):
    """
        Custom permission to only allow users to view/edit their own profile.
        """

    def has_object_permission(self, request, view, obj):
        if request.method:
            return obj == request.user
