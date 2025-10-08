from rest_framework import generics, permissions
from .models import Quote
from .serializers import QuoteSerializer


class QuoteList(generics.ListCreateAPIView):
    serializer_class = QuoteSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Quote.objects.all()


class QuoteDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()
