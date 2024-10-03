from django.urls import path , include

from .views import *
from rest_framework.routers import DefaultRouter

book = DefaultRouter()
book.register(r'books' , BookView , basename='books')

urlpatterns = [
    path('', include(book.urls)),
]

borrowing = DefaultRouter()
borrowing.register(r'borrowing' , BorrowingView , basename='borrowing')

urlpatterns = [
    path('', include(borrowing.urls)),
]