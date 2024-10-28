from django import forms
from .models import Noticia

class NoticiaForm(forms.ModelForm):
    class Meta:
        model = Noticia
        fields = ['titulo', 'resumo', 'latitude', 'longitude', 'imagem', 'link', 'icone', 'data']
