from django.urls import path
from .views import *

urlpatterns = [
    path('users/',RegistrationView.as_view()),
    path('users/<str:email>/',RegistrationItems.as_view()),
    path('products/',ProductView.as_view()),
    path('products/uploads/',ProductView.as_view()),
    path('products/<str:product_id>/get/',ProductViewItems.as_view()),
    path('products/<str:product_id>/delete/',ProductViewItems.as_view())
]
