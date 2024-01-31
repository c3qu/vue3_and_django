from rest_framework.serializers import ModelSerializer

from ppt.models import PptInfo


class PptInfoSerializer(ModelSerializer):
    class Meta:
        model = PptInfo
        fields = "__all__"
