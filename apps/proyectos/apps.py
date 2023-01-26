from django.apps import AppConfig

#El apps.proyectos, es porque estoy guardando la app 'proyectos' dentro de una carpeta apps.
#si la carpeta no existira no va el apps.
class ProyectosConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.proyectos'
