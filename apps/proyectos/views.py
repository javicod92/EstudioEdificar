from django.shortcuts import render
from .models import *


# Create your views here.
def Proyectos(request):
    contexto = dict()

    # Base de Datos al Template (Buscar la info solicitada y enviarla como variable al template)
    album = Album.objects.all()
    contexto['album'] = album

    return render(request, 'proyectos/proyectos.html', contexto)


def Fotos_Album(request, pk):
    contexto = dict()

    fotos = fotoAlbum.objects.filter(fotos_id = pk).order_by('-id')
    contexto['fotos'] = fotos

    return render(request, 'proyectos/detalle.html', contexto)