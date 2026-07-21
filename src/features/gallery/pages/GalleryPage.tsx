import { observer } from 'mobx-react-lite';
import { GalleryStoreProvider } from '../store/GalleryStoreContext';
import { GalleryHero } from '../components/GalleryHero';
import { AlbumGrid } from '../components/AlbumGrid';
import { GalleryTitle } from '../components/GalleryTitle';
import { LayoutToggle } from '../components/LayoutToggle';
import { PageWrapper, ContentWrapper, PageHeader } from './GalleryPage.styles';

export const GalleryPageContent = observer(function GalleryPageContent() {
  return (
    <PageWrapper>
      <GalleryHero />
      <ContentWrapper maxWidth="lg">
        <PageHeader>
          <GalleryTitle variant="pageTitle">Photo Gallery</GalleryTitle>
          <LayoutToggle />
        </PageHeader>
        <AlbumGrid />
      </ContentWrapper>
    </PageWrapper>
  );
});

export default function GalleryPage() {
  return (
    <GalleryStoreProvider>
      <GalleryPageContent />
    </GalleryStoreProvider>
  );
}
