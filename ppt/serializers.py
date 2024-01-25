from rest_framework.serializers import ModelSerializer

from ppt.models import PptTemplate


class PptTemplateSerializer(ModelSerializer):
    class Meta:
        model = PptTemplate
        fields = "__all__"
