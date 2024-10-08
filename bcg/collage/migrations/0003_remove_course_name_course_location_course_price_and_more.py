# Generated by Django 5.1 on 2024-08-21 19:34

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("collage", "0002_student"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="course",
            name="name",
        ),
        migrations.AddField(
            model_name="course",
            name="location",
            field=models.CharField(default="Not specified", max_length=255),
        ),
        migrations.AddField(
            model_name="course",
            name="price",
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.AddField(
            model_name="course",
            name="professor_name",
            field=models.CharField(default="Unknown", max_length=100),
        ),
        migrations.AddField(
            model_name="course",
            name="title",
            field=models.CharField(default="Untitled", max_length=100),
        ),
        migrations.AlterField(
            model_name="course",
            name="description",
            field=models.TextField(default="No description provided."),
        ),
        migrations.AlterModelTable(
            name="course",
            table="collage_course",
        ),
    ]
