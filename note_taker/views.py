from django.shortcuts import render

# Create your views here.

def index(request):
  return render(request, 'index.html')

def all_notes(request):
  return render(request, 'all_notes.html')

def new_notes(request):
  return render(request, 'new_notes.html')