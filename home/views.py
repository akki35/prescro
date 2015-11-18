from django.shortcuts import render


def home(request):
	if request.method == 'GET':
		q = request.GET.get('q')
		return render(request, 'cover.html', {'q': q})
	return render(request, 'cover.html')