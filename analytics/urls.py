"""analytics URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from backend.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    # This is the front function in views.py in backend
    path("", front, name="front"),

    # videos/?search=searchTextHere
    path('videos/', VideoListView.as_view(), name='videos_list'),

    # search/?title=titleOfVideoHere
    path('search/', ViewVideo.as_view(), name='view_video'),

    path('update/', UpdateVideo.as_view(), name='update_video'),

    path('delete/', DeleteVideo.as_view(), name='update_video'),

    path('insert/', InsertVideo.as_view(), name='insert_video'),

    path('average-tags/', AverageNumberOfTags.as_view(), name="average_tags")
]
