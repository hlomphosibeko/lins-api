from django.db import models
from django.contrib.auth.models import User


class Quote(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    num_kids = models.IntegerField(default=1)
    num_married = models.IntegerField(default=1)
    tertiary_education = models.IntegerField(default=1)
    cooker = models.IntegerField(default=1)
    neat = models.IntegerField(default=1)
    steady_income = models.IntegerField(default=1)
    personality = models.IntegerField(default=1)
    spirituality = models.IntegerField(default=1)
    innocence = models.IntegerField(default=1)
    premium_plan = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.owner}'
