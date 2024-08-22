from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Course, Student
from .serializers import CourseSerializer, StudentSerializer
from rest_framework import status



@api_view(['GET'])
def say_hi(request):
    return Response({"message": "hi"})

@api_view(['GET'])
def say_bye(request):
    return Response({"message": "bye"})

@api_view(['GET'])
def get_all_courses(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def student_list(request):
    if request.method == 'GET':
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
