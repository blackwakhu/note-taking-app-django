from django.shortcuts import render

# Create your views here.

from .models import Notes

def index(request):
  return render(request, 'index.html')

def all_notes(request):
  data = Notes.objects.all()
  return render(request, 'all_notes.html', {"data": data})

def new_notes(request):
  return render(request, 'new_notes.html')