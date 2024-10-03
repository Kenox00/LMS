from django.db import models
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.
class Librarian(models.Model) :
    username = models.CharField(max_length=100 , )
    email = models.CharField(max_length=100 ,)
    password = models.CharField(max_length=100)


    def save(self, *args, **kwargs):
        # Hash the password before saving
        if not self.password.startswith('pbkdf2_sha256$'):
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def check_password(self, raw_password):
        # Check if the provided password matches the hashed one
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.first_name
    

class Students(models.Model) :
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    registration_num = models.IntegerField()
    student_class = models.CharField(max_length= 10)

    def __str__(self):
        return self.first_name



   