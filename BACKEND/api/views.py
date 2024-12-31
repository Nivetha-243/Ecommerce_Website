from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .Serializers import * 

class RegistrationView(APIView):
    def post(self,request):
        new_user=Registration(user_name = request.data ["user_name"],email = request.data["email"],password = request.data["password"])
        new_user.save()
        return Response("Data Saved")
    def get(self,request):
        all_data=Registration.objects.all()
        data_all=[]

        for i in all_data:
            tem_var={
                "user_name":i.user_name,
                "email":i.email,
                "password":i.password
            }
            data_all.append(tem_var)
        return Response(data_all)
    
class RegistrationItems(APIView):
    def get(self,request,email):
        user_items=Registration.objects.get(email=email)
        temp_var={
            "user_name" : user_items.user_name,
            "email" : user_items.email,
            "password":user_items.password
        }
        return Response(temp_var)
    

class ProductView(APIView):
    def post(self,request):
        new_product=Product(product_id=request.data ["product_id"],
                            product_name=request.data ["product_name"],
                            category=request.data ["category"],
                            price=request.data ["price"],
                            product_image=request.data ["product_image"],
                            top_view=request.data ["top_view"],
                            right_side_view=request.data ["right_side_view"],
                            left_side_view=request.data ["left_side_view"],
                            video=request.data ["video"],
                            product_color1=request.data ["product_color1"],
                            product_color2=request.data ["product_color2"],
                            product_color3=request.data ["product_color3"],
                            product_color4=request.data ["product_color4"],
                            about_product=request.data ["about_product"])
        new_product.save()
        return Response("Data Saved")
    
    def get(self,request):
        products = Product.objects.all()
        Serializers = ProductSerializer(products, many=True)
        return Response(Serializers.data)
        
class ProductViewItems(APIView):

    def get(self,request,product_id):
        user_items=Product.objects.filter(product_id=product_id)
        Serializers = ProductSerializer(user_items, many=True)
        return Response(Serializers.data)
    
    def delete(self,request,product_id):
        user_items=Product.objects.get(product_id=product_id)
        user_items.delete()
        return Response({"message": "Product deleted successfully."})








