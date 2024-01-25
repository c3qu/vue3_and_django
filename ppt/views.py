from rest_framework.viewsets import ModelViewSet

from ppt.models import PptTemplate
from ppt.serializers import PptTemplateSerializer


class PptTemplateModelViewSet(ModelViewSet):
    serializer_class = PptTemplateSerializer
    queryset = PptTemplate.objects.all()
