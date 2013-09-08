from django.db import models
from movies.models import Movie

# Create your models here.
class Review (models.Model):
	name=models.CharField(max_length=100)
	body=models.CharField(max_length=1000)
	fresh= models.BooleanField()
	movie= models.CharField(max_length=100, null=True)
