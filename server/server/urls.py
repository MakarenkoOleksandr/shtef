from django.urls import path
from myapp.views import get_data

urlpatterns = [
    path('api/getNav/', get_data),
]
