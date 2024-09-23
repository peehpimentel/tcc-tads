from django.db import models

# Create your models here.
class FootballClubs(models.Model):
    id = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=200, unique=True)
    resumo = models.TextField(null=True)
    latitude = models.CharField(max_length=200,blank=True, null=True)
    longitude = models.CharField(max_length=200,blank=True, null=True)


    def __str__(self):
        return self.titulo