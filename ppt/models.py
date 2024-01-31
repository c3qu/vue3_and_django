from django.db.models import Model, CharField, IntegerField, TextField


# Create your models here.

# python manage.py makemigrations && python manage.py migrate

class PptInfo(Model):
    name = CharField(max_length=64)
    type = IntegerField(choices=((1, '模板'), (2, '背景'), (3, '图表')))
    category = CharField(max_length=64)
    page_count = CharField(max_length=16)
    cover_img_url = TextField(null=True)
    download_url = CharField(max_length=64, unique=True)
