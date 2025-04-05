from django.urls import path, include
#from . import views
from theApp import views #from the second vid
from .views import enroll_course

urlpatterns = [
    path('', views.index, name='index'),
    #path('', main)#if we get a blank url then call the main function and do whatever is inside there
    path('', views.index2, name='index2'),#it should just call whichever comes first if the '' at the beging is identical
    path('signup/', views.signup, name='signup'), #this will path to the sign up page (account creation)
    #path('login', views.login, name='login'),#paths to the login page
    path('login/', views.loginView, name='login'),
    path('courses/', views.courses, name='courses'),
    path('enroll/<int:course_id>/', views.enroll_course, name='enroll_course'),
    path('events/', views.events, name='events'),
    path('api/hello/', hello_world),


]