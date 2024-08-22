from django.urls import path
from .views import get_all_courses, say_hi, say_bye
from .views import student_list


urlpatterns = [
    path('hi/', say_hi, name='say-hi'),
    path('bye/', say_bye, name='say-bye'),
    path('courses/', get_all_courses, name='get-all-courses'),
    path('students/', student_list, name='student-list'),

]
