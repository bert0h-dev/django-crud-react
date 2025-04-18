from django.urls import include, path
from rest_framework import routers

from .views import TaskView

# Se genera un router para que me genere las urls automaticamente
# y no tener que escribirlas una a una
# Se registra la vista TaskView en el router
# Se le asigna el nombre de la vista como basename
router = routers.DefaultRouter()
router.register(r"tasks", TaskView, basename="tasks")

# Se definen las urls que se van a utilizar en la api
# Se incluye el router en las urls
# GET - POST - PUT - DELETE
# Lo genera por defecto
urlpatterns = [
    path('api/v1/', include(router.urls)),
]
