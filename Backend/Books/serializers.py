from rest_framework import serializers
from .models import *

class BookSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Book
        fields = '__all__'

class BorrrowingSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Borrowing
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Reservations
        fields = '__all__'

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Categories
        fields = '__all__'

