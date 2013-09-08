from django.db import models

# Create your models here.
class Movie (models.Model):
	name=models.CharField(max_length=100)
	url=models.URLField(max_length=100)
	pic_url=models.URLField(max_length=100)
	# Country
	country= models.CharField(max_length=100)
	# Percentage
	critics_score= models.IntegerField(null=True)
	# Percentage
	audience_score= models.IntegerField(null=True)
	is_american=models.BooleanField()
	# Review
	quotes1=models.CharField(max_length=1000)
	# Review Critic
	critic1=models.CharField(max_length=1000)
	# Boolean
	fresh1= models.CharField(max_length=100)
	quotes2=models.CharField(max_length=1000)
	critic2=models.CharField(max_length=1000)
	fresh2= models.CharField(max_length=100)
	quotes3=models.CharField(max_length=1000)
	critic3=models.CharField(max_length=1000)
	fresh3= models.CharField(max_length=100)