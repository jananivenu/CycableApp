from django.contrib import admin

from incidentReport.models import IncidentReport, BicycleAccident, BicycleTheft, NearMiss, Violations

# Register your models here.
admin.site.register(IncidentReport)

admin.site.register(BicycleAccident)
admin.site.register(BicycleTheft)
admin.site.register(NearMiss)
admin.site.register(Violations)
