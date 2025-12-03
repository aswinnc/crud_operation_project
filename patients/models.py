from django.db import models

class Patient(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    dob = models.DateField()

    home_address = models.CharField(max_length=255, blank=True, null=True)
    office_address = models.CharField(max_length=255, blank=True, null=True)

    selected_address = models.CharField(
        max_length=10,
        choices=[("Home", "Home"), ("Office", "Office")],
        default="Home"
    )

    def __str__(self):
        return self.name
