from django.db import models
from django.conf import settings

class Registration(models.Model):
    user_name=models.CharField(max_length=200,null=True)
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=50,null=True)
    
    def __str__(self):
        return self.user_name
class Product(models.Model):
    product_id=models.CharField(max_length=50,null=True)
    product_name=models.CharField(max_length=100,null=True)
    category=models.CharField(max_length=50,null=True)
    price=models.DecimalField(max_digits=10, decimal_places=2 ,default=0.00,null=True)
    product_image=models.ImageField(upload_to='products/product_image/', null=True, blank=True)
    top_view=models.ImageField(upload_to='products/top_view/', null=True, blank=True)
    right_side_view=models.ImageField(upload_to='products/right_side_view/', null=True, blank=True)
    left_side_view=models.ImageField(upload_to='products/left_side_view/', null=True, blank=True)
    video=models.FileField(upload_to='products/videos/', null=True, blank=True)
    product_color1=models.CharField(max_length=20, null=True) 
    product_color2=models.CharField(max_length=20,null=True) 
    product_color3=models.CharField(max_length=20,null=True) 
    product_color4=models.CharField(max_length=20,null=True) 
    about_product=models.TextField(null=True)
     
    def __str__(self):
        return self.product_name
    def get_absolute_url(self, field_name):
        file_field = getattr(self, field_name)
        if file_field:
            return settings.MEDIA_URL + str(file_field)
        return None
    