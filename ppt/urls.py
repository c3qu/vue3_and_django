from rest_framework.routers import DefaultRouter

from ppt.views import PptInfoModelViewSet

router = DefaultRouter()
router.register('template', PptInfoModelViewSet)
urlpatterns = router.urls
