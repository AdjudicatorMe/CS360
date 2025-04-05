from django.shortcuts import get_object_or_404, render, redirect
from django.contrib.auth import login #idk if this should be signup
from django.contrib.auth.decorators import login_required
from .forms import SignUpForm
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages
from .models import Feature, Course, Event
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
def index(request):
    features = Feature.objects.all()
    return render(request, 'index.html', {'features': features})

def index2(request):
    return render(request, 'index2.html')#idk

def signup(request):#Sign up page
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
                messages.info(request, 'Email Already in Use')
                return redirect('signup')#sends them back to the begining of the signup process
            elif User.objects.filter(username=username).exists():#send them back to the begining of the signup process
                #if the username is already being used but I don't think we have user names (i guess regular names is the same thing)
                messages.info(request, 'Username Already in Use')
                return redirect('signup')
            else:
                user = User.objects.create_user(username=username, email=email, password=password)#this might differ
                #depending on our database
                user.save()
                return redirect('login')
        else:
            messages.info(request, 'Passwords do not Match')
            return redirect('signup')
    else:
        return render(request, 'signup.html')#so this will need to be typescript

def loginView(request):#login page
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Credentials invalid')
            return redirect ('login')
    else:
        return render(request, 'login.html')
    
def logoutView(request):#not hooked up to anything since I don't think we've speciefed needing one.
    #Still, this should be the logic
    auth.logout(request)
    return redirect('')

@login_required(login_url='/login/')
def courses(request):#displays the available courses- Functions are Enroll, Filter(i'd like to remove this), and Search
    query = request.GET.get('q', '')  # Get the search query
    if query:
        courses_list = Course.objects.filter(title__icontains=query)
    else:
        courses_list = Course.objects.all()
    
    return render(request, 'courses.html', {'courses': courses_list, 'query': query})


@login_required(login_url='/login/')
def enroll_course(request, course_id):
    course = get_object_or_404(Course, id=course_id)
    
    if request.user in course.enrolled_users.all():
        messages.info(request, "You are already enrolled in this course.")
    else:
        course.enrolled_users.add(request.user)  # Add user to enrolled_users
        course.students_enrolled += 1
        course.save()
        messages.success(request, f"Successfully enrolled in {course.title}!")

    return redirect('courses')

def events(request):#displays events- Allows admins to create events (students can make meetings? I maybe missremembering)
    #and allows Registration for events
        events = Event.objects.all().order_by('date')
        return render(request, "events/event_list.html", {"events": events})

def callender(request):#A callender with registered events displayed on the side
    return redirect('')

def settings(request):#The admin dashboard- Allows Users, Courses, and Events to be added(removed as well?)
    return redirect('')


@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello from Django'})
