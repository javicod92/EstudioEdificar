from django.db import models

# Create your models here.
class Album(models.Model): 
    nombre = models.CharField(max_length = 60)
    descripcion = models.TextField(max_length = 150)
    imagen_Album = models.ImageField(upload_to = 'caratula')

    class Meta:
        verbose_name_plural = "Álbumes"
        verbose_name = "Álbum"

    def __str__(self) -> str:
        return self.nombre


class fotoAlbum(models.Model):
    imagen = models.ImageField(upload_to = 'fotos')
    fotos = models.ForeignKey(Album, on_delete = models.CASCADE)

    class Meta:
        verbose_name_plural = "Imágenes del Álbum"
        verbose_name = "Imágen"