from django.shortcuts import render

# Create your views here.

from .serializers import *
from rest_framework import viewsets

class BookView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BorrowingView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BorrrowingSerializer

class ReservationView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = ReservationSerializer

class CategoriesView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = CategoriesSerializer
