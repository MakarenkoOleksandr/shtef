from django.urls import path
from myapp.views import get_data, IndexView

urlpatterns = [
    path('api/getNav/', get_data),
    path('', IndexView.as_view(), name='index'),
    path('<path:path>', IndexView.as_view(), name='index'),
]
