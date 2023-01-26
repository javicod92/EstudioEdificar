"""EstudioEdificar URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

# Esto es para que cargen las imágenes que se guardan como url en la base de datos
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('Edificar/Estudio/admin/', admin.site.urls),
    path('', views.Home, name='home'),

    #Para la app de proyectos
    # el include, incluye todo el código que está en apps/proyectos/urls y se carga en ese lugar para poder operar 
    # con todo el código solicitado.
    path('proyectos/', include('apps.proyectos.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
