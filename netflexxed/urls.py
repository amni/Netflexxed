from django.conf.urls import patterns, include, url

from netflexxed import views

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'netflexxed.views.index', name='index'),
    url(r'chat/(?P<movie_id>\d+)', views.chat, name='chat'),
    url(r'^test', 'netflexxed.views.test', name='test'),
    # url(r'^netflexxed/', include('netflexxed.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
