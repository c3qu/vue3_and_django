# Generated by Django 5.0.1 on 2024-01-25 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ppt', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ppttemplate',
            name='cover_img_url',
            field=models.CharField(max_length=64, null=True),
        ),
    ]