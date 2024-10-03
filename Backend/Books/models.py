from django.db import models

# Book models 
class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    isbn = models.CharField(max_length=20)
    cover = models.ImageField(upload_to='cover/',blank=True,null=True) 
    description = models.CharField(max_length=255)
    published_date = models.DateField(null=True, blank=True)
    registration_date = models.DateTimeField(auto_now_add=True)
    quantity = models.IntegerField()

    def __str__(self):
        return self.title

# Borrowing models 
class Borrowing(models.Model):
    issuedby = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=100)
    returndate = models.DateField(null=True,blank=True)

    def __str__(self):
        return self.issuedby

# Reservations models 
class Reservations(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=100)

    def __str__(self):
        return self.status

# Categories models 
class Categories(models.Model):
    category_name = models.CharField(max_length=100)

    def __str__(self):
        return self.category_name





                              
