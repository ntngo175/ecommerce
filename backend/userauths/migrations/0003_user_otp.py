# Generated by Django 4.1.7 on 2024-03-04 07:50

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("userauths", "0002_alter_profile_user"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="otp",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
