"""
Django settings for slap_dj project.

Generated by 'django-admin startproject' using Django 3.1.3.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""
from decouple import config
from dj_database_url import parse as db_url
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.

BASE_DIR = Path(__file__).resolve().parent.parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY', default='*ay(8hrn^98w9z67nm&03bcp7xemaoo9ja&rctsh+2$n2x35#l')


# Application definition

INSTALLED_APPS = [
    'slap_dj.app.apps.SlapDjFlaskAppConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles'
]


# DATABASES = {
#     'default': config(
#         'DATABASE_URL',
#         default='sqlite:///' + str(BASE_DIR / 'db.sqlite3'),
#         cast=db_url
#     )
# }
DATABASES = {
    'default': config(
        'DATABASE_URL',
        default='sqlite:///' + str(BASE_DIR / 'db.sqlite3'),
       #  default='sqlite:///' + str(ROOT_DIR / 'db.sqlite3'),
        cast=db_url
    )
}

