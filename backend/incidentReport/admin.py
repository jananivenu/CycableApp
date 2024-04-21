from django.contrib import admin

from incidentReport.models import ReportedIncidents, BicycleAccident, BicycleTheft, NearMiss, Violations

from incidentReport.images_model import Images

# Register your models here.
admin.site.register(ReportedIncidents)

admin.site.register(BicycleAccident)
admin.site.register(BicycleTheft)
admin.site.register(NearMiss)
admin.site.register(Violations)
# admin.site.register(Images)
