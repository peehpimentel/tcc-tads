# Generated by Django 5.1.2 on 2024-10-28 20:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GeoFeed', '0002_remove_noticia_icone_tipo_noticia_icone_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='noticia',
            name='data',
            field=models.DateField(null=True),
        ),
    ]
