from django.contrib import admin
from .models import Profile, Book, Author, Language, Genre
# Register your models here.

admin.site.register(Profile)
admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Language)
admin.site.register(Genre)
