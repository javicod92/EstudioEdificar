from django.contrib import admin
from .models import *

# Register your models here.
class fotoAlbumAdmin(admin.TabularInline):
    model = fotoAlbum
    extra = 10

# Esta clase ayuda a insertar multiples fotografías dentro del álbum de fotos
class AlbumAdmin(admin.ModelAdmin):
    inlines = [
        fotoAlbumAdmin
    ]


# Esta instrucción es para que el admin de django reconozca la app
admin.site.register(Album, AlbumAdmin)