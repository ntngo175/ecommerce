# Generated by Django 4.1.7 on 2024-03-06 08:50

from django.db import migrations, models
import django.db.models.deletion
import shortuuid.django_fields


class Migration(migrations.Migration):
    dependencies = [
        ("store", "0002_alter_product_image_gallery"),
    ]

    operations = [
        migrations.AddField(
            model_name="gallery",
            name="active",
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name="gallery",
            name="gid",
            field=shortuuid.django_fields.ShortUUIDField(
                alphabet="abcdefg12345", length=10, max_length=25, prefix=""
            ),
        ),
        migrations.CreateModel(
            name="Specification",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=100)),
                ("content", models.CharField(max_length=100)),
                (
                    "product",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="store.product"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Size",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                (
                    "price",
                    models.DecimalField(decimal_places=2, default=0.0, max_digits=12),
                ),
                (
                    "product",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="store.product"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Color",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("color_code", models.CharField(max_length=100)),
                (
                    "product",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="store.product"
                    ),
                ),
            ],
        ),
    ]
