from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.viewsets import ModelViewSet

from ppt.CustomPagination import CustomPagination
from ppt.models import PptInfo
from ppt.serializers import PptInfoSerializer


class PptInfoModelViewSet(ModelViewSet):
    filterset_fields = ["name", "category", "type"]
    search_fields = ["name", "category"]
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]

    serializer_class = PptInfoSerializer
    queryset = PptInfo.objects.order_by("id")
    pagination_class = CustomPagination
