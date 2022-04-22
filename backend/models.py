from django.db import models

# Create your models here.

class Videos(models.Model):
    videoId = models.CharField(max_length=50)
    title = models.CharField(max_length=500)
    publishedAt = models.CharField(max_length=50)
    channelId = models.CharField(max_length=50)
    channelTitle = models.CharField(max_length=50)
    categoryId = models.IntegerField()
    trendingDate = models.CharField(max_length=50)
    tags = models.TextField()
    viewCount = models.IntegerField()
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    commentCount = models.IntegerField()
    thumbnailLink = models.CharField(max_length=100)
    commentsDisabled = models.BooleanField()
    ratingsDisabled = models.BooleanField()
    description = models.TextField()

    def __str__(self):
        return self.videoId