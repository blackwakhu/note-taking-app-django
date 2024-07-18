from django.shortcuts import get_object_or_404, redirect, render

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
    return redirect("/all notes")
  return render(request, 'new_notes.html')

def note(request, note_id):
  item = get_object_or_404(Notes, pk=note_id)
  if request.method == "POST":
    item.title = request.POST.get('title')
    item.content = request.POST.get('content')
    item.category = request.POST.get('category')
    item.save()
    return redirect("note", note_id)
  return render(request, 'note.html', {"item": item})

def delete_note(request, note_id):
  item = get_object_or_404(Notes, pk=note_id)
  item.delete()
  return redirect("/all notes/")