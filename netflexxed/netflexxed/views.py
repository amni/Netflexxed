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
from netflixhtml import html, html2
from movies.models import Movie
from reviews.models import Review
from rottentomatoes import RT
from django.utils import simplejson 


soup=BeautifulSoup(html2)
RT_KEY='utpyfbh943geqrnrcueqehga'

country='canada'
def index(request):
	movies=Movie.objects.order_by('critics_score').reverse()
	review_map={}
	for movie in movies:
		review_map[movie.name]= Review.objects.filter(movie=movie)
	print(review_map)
	json_data= simplejson.dumps([movie.name for movie in movies], indent=4)
	t = get_template('index.html')
	html = t.render(Context({'movies':movies, 'critically_acclaimed':movies,'fan_favorites':Movie.objects.order_by('audience_score'), 'not_in_america': [movie for movie in movies if movie.is_american==False], 'movie_json':json_data, 'reviews':review_map}))
	return HttpResponse(html)

def test(request):
	titles=[]
	img_locations=[]
	movie_locations=[]

	extract_movies(titles, img_locations, movie_locations)

	for i in range(len((titles))):
		# print(titles[i])
		# print(movie_locations[i])
		# print(img_locations[i])
		if (len(Movie.objects.filter(name=titles[i]))==0 and titles[i]!='LOL'):
			if (len(RT(RT_KEY).search(titles[i]))>0 and RT(RT_KEY).search(titles[i])[0]['ratings']['critics_score']!=-1):
					critics_score= RT(RT_KEY).search(titles[i])[0]['ratings']['critics_score']
					audience_score=RT(RT_KEY).search(titles[i])[0]['ratings']['audience_score']
					movie = Movie(name=titles[i], url=movie_locations[i]+'?country='+country, pic_url=img_locations[i], country=country, is_american=False, audience_score=audience_score, critics_score=critics_score)
					movie.save()
					# get_rotten_tomates()
			else:
				movie = Movie(name=titles[i], url=movie_locations[i]+'?country='+country, pic_url=img_locations[i], country=country, is_american=False)
				movie.save()
			# if (len(RT('bt7f4pcbku6m9mqzuhhncc9e').search(titles[i]))>0 and RT('bt7f4pcbku6m9mqzuhhncc9e').search(titles[i])[0]['ratings']['critics_score']!=-1):
			# 		critics_score= RT('bt7f4pcbku6m9mqzuhhncc9e').search(titles[i])[0]['ratings']['critics_score']
			# 		audience_score=RT('bt7f4pcbku6m9mqzuhhncc9e').search(titles[i])[0]['ratings']['audience_score']
			# 		movie = Movie(name=titles[i], url=movie_locations[i]+'?country='+country, pic_url=img_locations[i], country=country, is_american=False, audience_score=audience_score, critics_score=critics_score)
			# 		movie.save()
			# else:
		get_rotten_tomates()
	t = get_template('index.html')
	html = t.render(Context({}))
	return HttpResponse(html)

def chat(request, movie_id):
	# Set the variables you want to pass in
	movie = Movie.objects.get(id=movie_id)
	movie_name = movie.name
	movie_pic_url = movie.pic_url

	t = get_template('chat.html')
	html = t.render(Context({'movie_name': movie_name, 'movie_pic_url': movie_pic_url}))
	
	return HttpResponse(html)



def extract_movies(titles, img_locations, movie_locations):
	for a in soup.find_all('div', {"class": "agMovie"}):
		img=(a.find('img', alt=True, hsrc=True))
		link=(a.find('a'))
		if img and img['alt'] and link:
			titles.append(img['alt'])
			img_locations.append(img['hsrc'])
			movie_locations.append(link['href'])

def get_rotten_tomates(request):
	for movie in Movie.objects.all():
		print("got here")
		if len(RT('bt7f4pcbku6m9mqzuhhncc9e').search(movie.name))==0:
			break
		movie_id=RT('bt7f4pcbku6m9mqzuhhncc9e').search(movie.name)[0]['id']
		if (len(RT('bt7f4pcbku6m9mqzuhhncc9e').info(movie_id, 'reviews')['reviews'])>2):

							reviewblob = RT('bt7f4pcbku6m9mqzuhhncc9e').info(movie_id, 'reviews')['reviews']
							quote1=reviewblob[0]['quote']
							fresh_bool1='fresh' in reviewblob[0]['freshness']
							name1= reviewblob[0]['critic']
							quote2=reviewblob[1]['quote']
							fresh_bool2='fresh' in reviewblob[1]['freshness']
							name2= reviewblob[1]['critic']
							quote3=reviewblob[2]['quote']
							fresh_bool3='fresh' in reviewblob[2]['freshness']
							name3= reviewblob[2]['critic']
							movie.quote1=quote1
							print(movie.name)
							print (movie.quote1)
							movie.quote2=quote2
							movie.quote3=quote3
							movie.critic1=name1
							movie.critic2=name2
							movie.critic3=name3
							movie.fresh1=fresh_bool1
							movie.fresh2=fresh_bool2
							movie.fresh3=fresh_bool3
							movie.save()
	t = get_template('index.html')
	html = t.render(Context({}))
	return HttpResponse(html)

