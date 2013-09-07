from django.template.loader import get_template
from django.template import Context
from django.http import HttpResponse
from django.http import HttpResponseRedirect
import urllib2
from bs4 import BeautifulSoup
import time
import pdb
import json
import requests
from netflixhtml import html
from movies.models import Movie


soup=BeautifulSoup(html)


def index(request):

	titles=[]
	img_locations=[]
	movie_locations=[]

	for a in soup.find_all('img', alt=True, hsrc=True):
	    titles.append(a['alt'])
	    img_locations.append(a['hsrc'])


	for b in soup.find_all('a', { "class" : "bobbable" }):
		movie_locations.append(b['href'])
	for i in range(len((titles))):
		movie = Movie(name=titles[i], url=movie_locations[i], pic_url=img_locations[i])
		movie.save()
	t = get_template('index.html')
	html = t.render(Context({'movies':Movie.objects.all()}))
	return HttpResponse(html)

def test(request):
	# for movie in Movie.objects.all():
	# 	print (movie.name)
	# 	print (movie.url)
	# 	print(movie.pic_url)
	t = get_template('index.html')
	html = t.render(Context({}))
	return HttpResponse(html)
