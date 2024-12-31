from rest_framework import serializers
from .models import *
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['product_id', 'product_name', 'category', 'price',
                   'product_image','top_view','right_side_view',
                   'left_side_view','video','product_color1',
                   'product_color2','product_color3','product_color4',
                   'about_product']
        def to_representation(self, instance):
        # Get the default representation
            representation = super().to_representation(instance)

            # Assuming that product_image, top_view, right_side_view, left_side_view, and video are ImageField/FileField
            media_fields = ['product_image', 'top_view', 'right_side_view', 'left_side_view', 'video']

            for field in media_fields:
                # For each media field, we make sure it returns a URL for the media file
                if representation.get(field):
                    representation[field] = instance.get_absolute_url(field)  # You can adjust this if you want to return a full URL