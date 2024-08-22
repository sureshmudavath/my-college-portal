from rest_framework import serializers
from .models import Course
from .models import Student


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'professor_name', 'price', 'location', 'created_at']



class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
