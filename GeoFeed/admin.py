from django.contrib import admin
from .models import Noticia

@admin.register(Noticia)
class NoticiaAdmin(admin.ModelAdmin):
    # Campos a serem exibidos na lista do Django Admin
    list_display = ('titulo', 'data', 'data_adicionado', 'latitude', 'longitude')
    # Campos para busca
    search_fields = ('titulo', 'resumo', 'link')
    # Filtros
    list_filter = ('data', 'data_adicionado', 'icone')
    # Campos que podem ser editados
    list_editable = ('data_adicionado',)
    # Ordenação padrão
    ordering = ('-data',)
    # Campos exibidos no formulário de detalhes
    fields = ('titulo', 'resumo', 'latitude', 'longitude', 'imagem', 'link', 'icone', 'data', 'data_adicionado')
