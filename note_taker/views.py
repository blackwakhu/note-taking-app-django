from django.shortcuts import redirect, render

from .models import Notes


def index(request):
  return render(request, 'index.html')

def all_notes(request):
  data = Notes.objects.all()
  return render(request, 'all_notes.html', {"data": data})

def new_notes(request):
  if request.method == "POST":
    title = request.POST.get('title')
    content = request.POST.get('content')
    category = request.POST.get('category')
    note = Notes(title=title, content=content, category=category)
    note.save()
    return redirect("/")
  return render(request, 'new_notes.html')

def note(request, note_id):
  return render(request, 'note.html')