from django.db import models
from django.utils import timezone



class Course(models.Model):
    title = models.CharField(max_length=100, default='Untitled')
    description = models.TextField(default='No description provided.')
    professor_name = models.CharField(max_length=100, default='Unknown')
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    location = models.CharField(max_length=255, default='Not specified')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'collage_course'



class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    enrollment_date = models.DateField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
