from django.db import models
from django.db.models import Model, CharField


# Create your models here.

# python manage.py makemigrations && python manage.py migrate

class PptTemplate(Model):
    template_name = CharField(max_length=64, unique=True)
    category = CharField(max_length=64)
    page_count = CharField(max_length=16)
    cover_img_url = CharField(max_length=64, null=True)
    download_url = CharField(max_length=64)
