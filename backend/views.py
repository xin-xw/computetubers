from turtle import update
from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import filters

from .serializers import VideoSerializer
from .models import Videos


def front(request):
    context = {}

    return render(request, "index.html", context)

# Search a video
# videos/?search=searchTextHere


class VideoListView(generics.ListAPIView):
    queryset = Videos.objects.all()
    serializer_class = VideoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']


# Get a video by title
# search/?view_title=titleOfVideoHere

class ViewVideo(generics.ListCreateAPIView):
    serializer_class = VideoSerializer

    def get_queryset(self, *args, **kwargs):
        query_set = Videos.objects.all()
        video_title = self.request.query_params.get('video_title')
        if video_title:
            query_set = query_set.filter(title__icontains=video_title)

        return query_set[:10]

# update/?view_id=<videoId>


class UpdateVideo(generics.ListAPIView):
    serializer_class = VideoSerializer

    def get_queryset(self, *args, **kwargs):
        query_set = Videos.objects.all()
        video_id = self.request.query_params.get('video_id')

        query_set = query_set.filter(videoId=video_id)

        # grab the video
        # grab_video = Videos.objects.get(videoId=video_id)
        # print("Grabbed the video", grab_video)
        updated_values = {}

        video_title = self.request.query_params.get('video_title')
        if video_title:
            updated_values['title'] = video_title

        channel_title = self.request.query_params.get('channel_title')
        if channel_title:
            updated_values['channelTitle'] = channel_title

        view_count = self.request.query_params.get('view_count')
        if view_count:
            updated_values['viewCount'] = view_count

        trending_date = self.request.query_params.get('trending_date')
        if trending_date:
            updated_values['trendingDate'] = trending_date

        video_likes = self.request.query_params.get('video_likes')
        if video_likes:
            updated_values['likes'] = video_likes

        video_dislikes = self.request.query_params.get('video_dislikes')
        if video_dislikes:
            updated_values['dislikes'] = video_dislikes

        comment_count = self.request.query_params.get('comment_count')
        if comment_count:
            updated_values['commentCount'] = comment_count

        updated_obj = []
        for obj in query_set:
            for key, value in updated_values.items():
                setattr(obj, key, value)
            # obj = Videos.objects.update_or_create(
            #     videoId=video_id, title=video_title)
            obj.save()
            updated_obj.append(obj)

        print(updated_values)
        print("Successful")
        # for key, value in updated_values.items():
        # setattr(grab_video, key, value)

        # grab_video.save()
        return updated_obj


class DeleteVideo(generics.ListAPIView):
    serializer_class = VideoSerializer

    def get_queryset(self, *args, **kwargs):
        video_id = self.request.query_params.get('video_id')
        Videos.objects.filter(videoId=video_id).delete()

        return


class InsertVideo(generics.ListAPIView):
    serializer_class = VideoSerializer

    def get_queryset(self, *args, **kwargs):
        updated_values = {}

        video_title = self.request.query_params.get('video_title')
        if video_title:
            updated_values['title'] = video_title

        channel_title = self.request.query_params.get('channel_title')
        if channel_title:
            updated_values['channelTitle'] = channel_title

        view_count = self.request.query_params.get('view_count')
        if view_count:
            updated_values['viewCount'] = view_count

        trending_date = self.request.query_params.get('trending_date')
        if trending_date:
            updated_values['trendingDate'] = trending_date

        video_likes = self.request.query_params.get('video_likes')
        if video_likes:
            updated_values['likes'] = video_likes

        video_dislikes = self.request.query_params.get('video_dislikes')
        if video_dislikes:
            updated_values['dislikes'] = video_dislikes

        comment_count = self.request.query_params.get('comment_count')
        if comment_count:
            updated_values['commentCount'] = comment_count

        video = Videos(title=video_title,
                       publishedAt="",
                       channelTitle=channel_title,
                       categoryId=0,
                       trendingDate=trending_date,
                       tags="",
                       viewCount=view_count,
                       likes=video_likes,
                       dislikes=video_dislikes,
                       commentCount=comment_count,
                       thumbnailLink="",
                       commentsDisabled=False,
                       ratingsDisabled=False,
                       description="")
        video.save()
        # updated_obj = []
        # for obj in query_set:
        #     for key, value in updated_values.items():
        #         setattr(obj, key, value)
        #     # obj = Videos.objects.update_or_create(
        #     #     videoId=video_id, title=video_title)
        #     obj.save()
        #     updated_obj.append(obj)

        # print(updated_values)
        print("Inserted video successfully ", video_title)
        # for key, value in updated_values.items():
        # setattr(grab_video, key, value)
        obj = []
        obj.append(video)
        # grab_video.save()
        return obj


class AverageNumberOfTags(generics.ListAPIView):

    serializer_class = VideoSerializer

    def get(self, request):
        queryset = Videos.objects.all()

        all_tags = []
        filter_backends = [filters.SearchFilter]
        search_fields = ['tags']
        num_tags = 0
        num_obj = 0
        for obj in queryset:
            tags = obj.tags
            if tags == '[None]':
                continue
            num_obj += 1
            tags_split = tags.split("|")
            for tag in tags_split:
                all_tags.append(tag)
        num_tags += len(all_tags)

        return(HttpResponse(str(num_tags / num_obj)))
