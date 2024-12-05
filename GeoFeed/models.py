from django.db import models
from django.utils.timezone import now, localtime
from datetime import timedelta, datetime


class Noticia(models.Model):
    titulo = models.CharField(max_length=200)
    resumo = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    imagem = models.ImageField(upload_to='imagens/', null=True, blank=True)
    link = models.URLField(max_length=200)
    icone = models.CharField(max_length=100, default='locationIcon')
    data = models.DateTimeField(null=True)  # Data com hora para ter uma precisão maior
    duracao = models.PositiveIntegerField(default=1)  
    data_adicionado = models.DateTimeField(default=now)  # Quando a notícia foi criada

    def esta_visivel_em(self, data_consulta):
        """
        data_consulta: verificar se a notícia está visível.
        """
        if self.data:
            # Ajusta para o timezone local antes de comparar
            data_inicio = localtime(self.data).date()  # Remove a hora e converte para a data local
            data_final = data_inicio + timedelta(days=self.duracao - 1) # Exemplo: se a data_inicio for 01/12/2024 e duracao for 3 dias, a data_final será 03/12/2024.
            return data_inicio <= data_consulta <= data_final
        return False

    def __str__(self):
        return self.titulo

    class Meta: # Definições para o url localhost:8000/admin/
        verbose_name = "Notícia"
        verbose_name_plural = "Notícias"
        ordering = ['-data_adicionado']
        
