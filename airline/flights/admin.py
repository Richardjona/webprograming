from django.contrib import admin

from .models import Flight, Airpot, Passenger

# Register your models here.
admin.site.register(Airpot)
admin.site.register(Flight)
admin.site.register(Passenger)