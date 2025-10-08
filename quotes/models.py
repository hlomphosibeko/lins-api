from django.db import models
from django.contrib.auth.models import User


class Quote(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    numKids = models.IntegerField(default=1)
    numMarried = models.IntegerField(default=1)
    tertiaryEducation = models.IntegerField(default=1)
    cooker = models.IntegerField(default=1)
    neat = models.IntegerField(default=1)
    steadyIncome = models.IntegerField(default=1)
    personality = models.IntegerField(default=1)
    spirituality = models.IntegerField(default=1)
    innocence = models.IntegerField(default=1)
    premiumPlan = models.DecimalField(
        max_digits=20, decimal_places=2, default=0.00)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.owner}'
