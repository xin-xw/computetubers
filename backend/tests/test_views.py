from django.test import RequestFactory, TestCase, Client
from backend.views import *
from backend.models import *
from django.urls import reverse
from rest_framework import status
from django.utils.http import urlencode
import unittest
import json

# Create your tests here.


class VideoCreateTest(TestCase):
    def setup(self):
        self.factory = RequestFactory()
        self.test_video_1.save()

    def test_creating_video(self):
        print("Creating Video")
        self.test_video_1 = Videos.objects.create(videoId='9999999',
                                                  title='xin_test_video_1',
                                                  publishedAt='2/4/2022',
                                                  channelTitle='Xin Wang',
                                                  categoryId=20,
                                                  trendingDate='2/4/2022',
                                                  tags='Test1, Test2, Test3',
                                                  viewCount=3030303,
                                                  likes=12345,
                                                  dislikes=0,
                                                  commentCount=0,
                                                  thumbnailLink='',
                                                  commentsDisabled=True,
                                                  ratingsDisabled=False,
                                                  description='Xin\'s Test Video 1')
        print("Video Created", Videos.objects.get().title, Videos.objects.get().channelTitle, "Number of videos:", Videos.objects.filter(
            title='xin_test_video_1').count())
        self.assertEqual(Videos.objects.filter(
            title='xin_test_video_1').count(), 1)

    def test_deleting_video(self):
        self.test_video_1 = Videos.objects.create(videoId='9999999',
                                                  title='xin_test_video_1',
                                                  publishedAt='2/4/2022',
                                                  channelTitle='Xin Wang',
                                                  categoryId=20,
                                                  trendingDate='2/4/2022',
                                                  tags='Test1, Test2, Test3',
                                                  viewCount=3030303,
                                                  likes=12345,
                                                  dislikes=0,
                                                  commentCount=0,
                                                  thumbnailLink='',
                                                  commentsDisabled=True,
                                                  ratingsDisabled=False,
                                                  description='Xin\'s Test Video 1')

        print("Deleting Video", Videos.objects.get().title,
              Videos.objects.get().channelTitle)
        self.test_video_1.delete()
        self.assertEqual(Videos.objects.filter(
            title='xin_test_video_1').count(), 0)
        print("Video Deleted", Videos.objects.filter(
            title='xin_test_video_1').count())

    def test_updating_video(self):
        self.test_video_1 = Videos.objects.create(videoId='9999999',
                                                  title='xin_test_video_1',
                                                  publishedAt='2/4/2022',
                                                  channelTitle='Xin Wang',
                                                  categoryId=20,
                                                  trendingDate='2/4/2022',
                                                  tags='Test1, Test2, Test3',
                                                  viewCount=3030303,
                                                  likes=12345,
                                                  dislikes=0,
                                                  commentCount=0,
                                                  thumbnailLink='',
                                                  commentsDisabled=True,
                                                  ratingsDisabled=False,
                                                  description='Xin\'s Test Video 1')

        print("Original Title:", Videos.objects.get().title,)

        request = RequestFactory().get(
            '?video_id=9999999&video_title=xin_updated_name')
        view = UpdateVideo.as_view()

        print("New Title:")

        response = view(request)
        print(response)

        return response

    def test_get_all_videos_keyword_test(self):
        request = RequestFactory().get('/search/?title=test')
        view = VideoListView.as_view()
        response = view(request)
        print(response)

        # ensures http status is 200 -> correctly responding
        self.assertEqual(response.status_code, status.HTTP_200_OK)
