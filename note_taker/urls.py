from django.urls import path

from . import views

urlpatterns = [
  path('', views.index, name='index'),
  path('all notes/', views.all_notes, name='all_notes'),
  path('new notes/', views.new_notes, name='new_notes'),
  path('note/<int:note_id>/', views.note, name='note'),
]