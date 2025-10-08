from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator


class Quote(models.Model):
    """
    Quote model is used to create insurance quotes.
    """
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE)
    numKids = models.IntegerField(
        default=1, validators=[MinValueValidator(0), MaxValueValidator(100)])
    numMarried = models.IntegerField(
        default=1, validators=[MinValueValidator(0), MaxValueValidator(10)])
    tertiaryEducation = models.IntegerField(
        default=1, validators=[MinValueValidator(0), MaxValueValidator(10)])
    cooker = models.IntegerField(
        default=1, validators=[MinValueValidator(0), MaxValueValidator(100)])
    neat = models.IntegerField(
        default=1, validators=[MinValueValidator(0), MaxValueValidator(100)])
    steadyIncome = models.IntegerField(
        default=1, validators=[MinValueValidator(0), MaxValueValidator(100)])
    personality = models.IntegerField(
        default=1, validators=[MinValueValidator(0), MaxValueValidator(100)])
    spirituality = models.IntegerField(
        default=1, validators=[MinValueValidator(0), MaxValueValidator(100)])
    innocence = models.IntegerField(
        default=1, validators=[MinValueValidator(0), MaxValueValidator(100)])
    premiumPlan = models.DecimalField(
        max_digits=20, decimal_places=2, default=0.00)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.owner}'
