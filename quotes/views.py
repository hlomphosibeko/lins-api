from rest_framework import generics, permissions
from .models import Quote
from .serializers import QuoteSerializer
from lins_api.permissions import IsOwnerOrReadOnly


class QuoteList(generics.ListCreateAPIView):
    """
    List quotes or create a quote if logged in
    The perform_create method associates the quote with the logged in user.
    """
    serializer_class = QuoteSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Quote.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class QuoteDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a quote and cancel it if you own it.
    """
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()
    permission_classes = [IsOwnerOrReadOnly]
