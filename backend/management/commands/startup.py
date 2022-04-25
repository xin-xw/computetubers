import csv, os
from django.conf import settings
from django.core.management import BaseCommand
from backend.models import Videos
from backend.enums import Headings

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        file_ = open(os.path.join(settings.BASE_DIR, 'US_youtube_trending_data.csv'))
        with open('US_youtube_trending_data.csv', 'r') as file:
            data = csv.reader(file, delimiter = ',')
            headings = next(data)
            videos = []
            videoIds = set()
            for row in data:
                if row[Headings.VIDEO_ID.value] not in videoIds:
                    videoIds.add(row[Headings.VIDEO_ID.value])
                    video = Videos(
                        videoId = row[Headings.VIDEO_ID.value],
                        title = row[Headings.TITLE.value],
                        publishedAt = row[Headings.PUBLISHED_AT.value],
                        channelId = row[Headings.CHANNEL_ID.value],
                        channelTitle = row[Headings.CHANNEL_TITLE.value],
                        categoryId = row[Headings.CATEGORY_ID.value],
                        trendingDate = row[Headings.TRENDING_DATE.value],
                        tags = row[Headings.TAGS.value],
                        viewCount = row[Headings.VIEW_COUNT.value],
                        likes = row[Headings.LIKES.value],
                        dislikes = row[Headings.DISLIKES.value],
                        commentCount = row[Headings.COMMENT_COUNT.value],
                        thumbnailLink = row[Headings.THUMBNAIL_LINK.value],
                        commentsDisabled = row[Headings.COMMENTS_DISABLED.value],
                        ratingsDisabled = row[Headings.RATINGS_DISABLED.value],
                        description = row[Headings.DESCRIPTION.value]
                    )
                    videos.append(video)
                if len(videos) > 5000:
                    Videos.objects.bulk_create(videos)
                    videos = []
            if videos:
                Videos.objects.bulk_create(videos)
        return
