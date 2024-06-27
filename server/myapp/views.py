from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import View
from myapp.models import Navigation


def get_data(request):
    data = list(Navigation.objects.all().values())
    return JsonResponse(data, safe=False)


class IndexView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')
