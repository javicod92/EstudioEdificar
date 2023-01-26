from django.urls import path
from . import views

# ¿Como funciona esto? en el archivo html llamo a. proyectos:proyectos, donde el primer proyectos es el app_name
# y es por ello que debe ir si o si. el segundo es el name='proyectos'. Este archivo URLS.py se lo incluye
# directamente mediante el include en las urls principales.
#Esto del html {% url proyectos:proyectos %} y el uso del app_name, solo lo uso porque por ejemplo, la app
#proyectos, puede tener una página llamada name='home' como la de la página principal, entonces en estos casos
#es recomendable usar esta serie de código. Si los nombre no se repiten se puede usar solamente en el html
# {% url proyectos %} y el app_name = 'proyectos' no va escrito.

app_name = 'proyectos'
urlpatterns = [
    path('', views.Proyectos, name='proyectos'),
    path('Fotos/<int:pk>', views.Fotos_Album, name='fotos_album'),
]