## mysql建库sql语句
```
CREATE DATABASE mos_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## 将template_meta.json中数据导入数据库中命令
```
python manage.py test ppt.tests.MyModelTestCase.test_init_template_table
```