from django.http import JsonResponse
from myapp.models import Navigation


def get_data(request):
    data = list(Navigation.objects.all().values())
    return JsonResponse(data, safe=False)
