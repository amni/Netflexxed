import urllib2
from bs4 import BeautifulSoup
import time
import pdb
import json
from netflixhtml import html


soup=BeautifulSoup(html)

for a in soup.find_all('img', alt=True, hsrc=True):
    print a['alt']
    print a['hsrc']
for b in soup.find_all('a', { "class" : "bobbable" }):
	print b['href']