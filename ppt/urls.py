from rest_framework.routers import DefaultRouter

from ppt.views import PptTemplateModelViewSet

router = DefaultRouter()
router.register('template', PptTemplateModelViewSet)
urlpatterns = router.urls
