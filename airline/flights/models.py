from django.db import models

# Create your models here.
class Airpot(models.Model):
    code = models.CharField(max_length=3)
    city = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.city} ({self.code})"

class Flight(models.Model):
    origin = models.ForeignKey(Airpot, on_delete=models.CASCADE, related_name ="depatures")
    destination = models.ForeignKey(Airpot, on_delete=models.CASCADE, related_name="Arrivals" )
    duration = models.IntegerField()

    def __str__(self):
        return f"{self.id}: {self.origin} to {self.destination}"

class Passenger(models.Model):
    first = models.CharField(max_length=14)
    last = models.CharField(max_length=20)
    flights = models.ManyToManyField(Flight, blank=True, related_name="passengers")

    def __str__(self):
        return f"{self.first} {self.last}"