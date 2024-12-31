# Generated by Django 5.1.4 on 2024-12-31 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_product_price_alter_product_left_side_view_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='about_product',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='left_side_view',
            field=models.ImageField(blank=True, null=True, upload_to='products/left_side_view/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_color1',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_color2',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_color3',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_color4',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_image',
            field=models.ImageField(blank=True, null=True, upload_to='products/product_image/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='right_side_view',
            field=models.ImageField(blank=True, null=True, upload_to='products/right_side_view/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='top_view',
            field=models.ImageField(blank=True, null=True, upload_to='products/top_view/'),
        ),
    ]
