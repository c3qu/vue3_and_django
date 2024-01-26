import json
from unittest import TestCase

from ppt.models import PptTemplate


# 执行测试
# python .\manage.py test ppt
class MyModelTestCase(TestCase):
    def setUp(self) -> None:
        pass

    def test_model_field(self):
        f = open("ppt/template_meta.json", "r", encoding="utf-8")
        data = json.loads(f.read())
        for i in data:
            PptTemplate.objects.create(
                template_name=i["template_name"],
                category=i["category"],
                page_count=i["page_count"],
                cover_img_url=i["cover_img_url"],
                download_page=i["download_page"]
            )
        self.assertEqual(PptTemplate.objects.count(), 3689)
