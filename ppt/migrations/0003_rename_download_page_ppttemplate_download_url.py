# Generated by Django 5.0.1 on 2024-01-26 01:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ppt', '0002_alter_ppttemplate_cover_img_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ppttemplate',
            old_name='download_page',
            new_name='download_url',
        ),
    ]