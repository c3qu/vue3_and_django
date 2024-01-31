import json
import re
from unittest import TestCase

import requests

from ppt.models import PptInfo


# 执行测试
# python .\manage.py test ppt
class MyModelTestCase(TestCase):
    def setUp(self) -> None:
        pass

    def test_init_template_table(self):
        types = [
            "moban",
            "beijing",
            "tubiao"
        ]
        for index, ppt_type in enumerate(types):
            f = open(f"ypppt/{ppt_type}_meta.json", "r", encoding="utf-8")
            data = json.loads(f.read())

            for i in data:
                defaults = {
                    "name": i["template_name"],
                    "type": index + 1,
                    "category": i["category"],
                    "page_count": i["page_count"],
                    "cover_img_url": i["cover_img_url"],
                    "download_url": i["download_page"]
                }
                PptInfo.objects.get_or_create(defaults=defaults, download_url=i["download_page"])
        print(PptInfo.objects.count())
        self.assertEqual(1, 1)

    def test_download_cover_pic_and_ppt_file(self):
        for ppt_template in PptInfo.objects.all():
            download_url = ppt_template.download_url
            if "aid=" in download_url:
                res = requests.get(download_url, verify=False)
                p = re.compile(r'href="(.*?)">下')
                result_list = p.findall(res.text)
                ppt_template.download_url = result_list[0]
                ppt_template.save()

        self.assertEqual(1, 1)

    def test_change_url(self):
        download_url_404_list = [
            "1-1P20F91606.rar",
            "1-1F304004F6.rar",
            "1-1P2230US3.rar",
            "1-1G01Q01124.rar",
            "1-1G1240Z116.rar",
            "1-1FQ50ZK1.rar",
            "1-1F306225120.rar",
            "1-1P6130Z418.rar",
            "1-161024101153.zip",
            "1-160301091419.rar",
            "1-160215093G1.rar",
            "1-160125122932.rar",
            "1-151212210047.rar",
            "1-151115235221.rar",
            "1-150605151I7.rar",
            "1-15050Q53402.rar",
            "1-15042GJ609.rar",
        ]
        for ppt_template in PptInfo.objects.all():
            download_url = ppt_template.download_url
            cover_img_url = ppt_template.cover_img_url
            if cover_img_url and "http" in cover_img_url:
                new_cover_img_url = f'/assets/cover_img/{cover_img_url.split("/")[-1]}'
                ppt_template.cover_img_url = new_cover_img_url
            if ("http" in download_url
                    and "pan.baidu.com" not in download_url
                    and download_url.split("/")[-1] not in download_url_404_list):
                new_download_url = f'/assets/ppt_file/{download_url.split("/")[-1]}'
                ppt_template.download_url = new_download_url
            ppt_template.save()
        self.assertEqual(1, 1)
