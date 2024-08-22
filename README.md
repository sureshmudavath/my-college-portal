# College Portal

## Adding Data

To populate your database with sample data, follow these instructions:

### Student Data

1. **Navigate to the project directory**:

   ```bash
   cd bcg
python manage.py shell

//Insert student data

from collage.models import Student  # Replace 'collage' with the name of your Django app
from datetime import datetime

# Create and save a new Student instance
student1 = Student(
    first_name='Alice',
    last_name='Williams',
    email='alice.williams@example.com',
    enrollment_date=datetime.strptime('2024-08-15', '%Y-%m-%d')
)
student1.save()

# Create and save another Student instance
student2 = Student(
    first_name='Bob',
    last_name='Brown',
    email='bob.brown@example.com',
    enrollment_date=datetime.strptime('2024-08-16', '%Y-%m-%d')
)
student2.save()

# Create and save multiple students in a loop
students = [
    {'first_name': 'Charlie', 'last_name': 'Johnson', 'email': 'charlie.johnson@example.com', 'enrollment_date': '2024-08-17'},
    {'first_name': 'Diana', 'last_name': 'White', 'email': 'diana.white@example.com', 'enrollment_date': '2024-08-18'},
    {'first_name': 'Ethan', 'last_name': 'Harris', 'email': 'ethan.harris@example.com', 'enrollment_date': '2024-08-19'}
]

for student_data in students:
    student = Student(
        first_name=student_data['first_name'],
        last_name=student_data['last_name'],
        email=student_data['email'],
        enrollment_date=datetime.strptime(student_data['enrollment_date'], '%Y-%m-%d')
    )
    student.save()

print("Students added successfully!")

//insert course data
from collage.models import Course  # Replace 'collage' with the name of your Django app

# Creating sample course entries
Course.objects.create(
    title='Introduction to Computer Science',
    description='An introductory course to computer science principles and programming.',
    professor_name='Dr. Alice Johnson',
    price=150.00,
    location='Building A, Room 101'
)

Course.objects.create(
    title='Data Structures and Algorithms',
    description='A course focused on fundamental data structures and algorithms.',
    professor_name='Prof. Bob Smith',
    price=200.00,
    location='Building B, Room 202'
)

Course.objects.create(
    title='Web Development Basics',
    description='Learn the basics of web development including HTML, CSS, and JavaScript.',
    professor_name='Ms. Carol Lee',
    price=175.00,
    location='Building C, Room 303'
)

Course.objects.create(
    title='Database Management Systems',
    description='An in-depth look at database design and management using SQL.',
    professor_name='Dr. David Brown',
    price=220.00,
    location='Building D, Room 404'
)

Course.objects.create(
    title='Machine Learning Fundamentals',
    description='Introduction to machine learning concepts and techniques.',
    professor_name='Dr. Emma White',
    price=250.00,
    location='Building E, Room 505'
)

print("Courses added successfully!")

