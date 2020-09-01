# src: https://docs.wagtail.io/en/stable/advanced_topics/api/v2/configuration.html?highlight=wagtail.api.v2.endpoints
# src: https://learnwagtail.com/tutorials/how-to-enable-the-v2-api-to-create-a-headless-cms/
# imports from tutorial
from wagtail.api.v2.views import PagesAPIViewSet
from wagtail.api.v2.router import WagtailAPIRouter
from wagtail.images.api.v2.views import ImagesAPIViewSet
from wagtail.documents.api.v2.views import DocumentsAPIViewSet

# Init the Wagtail Router
api_router = WagtailAPIRouter('wagtailapi')

# Register 3 API endpoints: Pages, Images and Documents
api_router.register_endpoint('pages', PagesAPIViewSet)
api_router.register_endpoint('images', ImagesAPIViewSet)
api_router.register_endpoint('documents', DocumentsAPIViewSet)


