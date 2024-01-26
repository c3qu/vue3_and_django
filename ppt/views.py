from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.viewsets import ModelViewSet

from ppt.CustomPagination import CustomPagination
from ppt.models import PptTemplate
from ppt.serializers import PptTemplateSerializer


class PptTemplateModelViewSet(ModelViewSet):
    filterset_fields = ["template_name", "category"]
    search_fields = ["template_name"]
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]

    serializer_class = PptTemplateSerializer
    queryset = PptTemplate.objects.order_by("id")
    pagination_class = CustomPagination
