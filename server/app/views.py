from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
import os

def index(request):
    return HttpResponse("Returning test response")

def fetch_related_