from django.shortcuts import render


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
# search/?title=titleOfVideoHere

class ViewVideo(generics.ListCreateAPIView):
    serializer_class = VideoSerializer
   
    def get_queryset(self, *args, **kwargs):
        query_set = Videos.objects.all()
        video_title = self.request.query_params.get('video_title')
        video_id = self.request.query_params.get('video_id')
        if video_title:
            query_set = query_set.filter(title__icontains=video_title)

        return query_set[:10]
        