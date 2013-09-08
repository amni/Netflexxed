from django.db import models

# Create your models here.
class Movie (models.Model):
	name=models.CharField(max_length=100)
	url=models.URLField(max_length=100)
	pic_url=models.URLField(max_length=100)
	country= models.CharField(max_length=100)
	critics_score= models.IntegerField(null=True)
	audience_score= models.IntegerField(null=True)
	is_american=models.BooleanField()