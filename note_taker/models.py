from django.db import models

# Create your models here.

class Notes(models.Model):
  title = models.CharField(max_length=100)
  content = models.TextField()
  category = models.CharField(max_length=25)
  date_created = models.DateTimeField(auto_now_add=True)
  date_modified = models.DateTimeField(auto_now=True)