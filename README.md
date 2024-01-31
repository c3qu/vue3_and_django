## mysql建库sql语句
```
CREATE DATABASE mos_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## 初始化数据库

```
python manage.py makemigrations && python manage.py migrate
```

## 将json数据导入数据库的命令
```
python manage.py test ppt.tests.MyModelTestCase.test_init_template_table
```

## 修改download url
```
python manage.py test ppt.tests.MyModelTestCase.test_download_cover_pic_and_ppt_file
```
