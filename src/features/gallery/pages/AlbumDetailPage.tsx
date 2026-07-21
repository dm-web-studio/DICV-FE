import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CircularProgress from '@mui/material/CircularProgress';
import { GalleryStoreProvider, useGalleryStore } from '../store/GalleryStoreContext';
import { GalleryHero } from '../components/GalleryHero';
import { ImageGrid } from '../components/ImageGrid';
import { PageWrapper, ContentWrapper } from './GalleryPage.styles'; // Reuse page wrappers
import { HeaderContainer, BackLink, AlbumHeaderRow } from './AlbumDetailPage.styles';
import { GalleryTitle } from '../components/GalleryTitle';
import { LayoutToggle } from '../components/LayoutToggle';

const AlbumDetailPageContent = observer(function AlbumDetailPageContent() {
  const { slug } = useParams<{ slug: string }>();
  const { domain } = useGalleryStore();

  useEffect(() => {
    // Ensure albums are loaded so we can find the current album by slug
    if (domain.albums.length === 0 && !domain.isLoadingAlbums) {
      void domain.fetchAlbums();
    }
  }, [domain]);

  // If albums are still loading, we might not find it yet. 
  // Let's just show a loader or empty state if it's not found after loading.
  const album = slug ? domain.getAlbumBySlug(slug) : undefined;

  if (domain.hasFetchedAlbums && slug && !album) {
    // If we finished loading and still can't find it, it might be invalid
    return <Navigate to="/gallery" replace />;
  }

  // Optional: show a loading state for the whole page while the album is being looked up
  if (!album && domain.isLoadingAlbums) {
    return (
      <PageWrapper>
        <GalleryHero />
        <ContentWrapper>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
            <CircularProgress />
          </div>
        </ContentWrapper>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <GalleryHero />
      <ContentWrapper maxWidth="lg">
        {album && (
          <HeaderContainer>
            <BackLink to="/gallery">
              <ArrowBackIosNewIcon />
              Back to Gallery
            </BackLink>
            <AlbumHeaderRow>
              <GalleryTitle variant="pageTitle">{album.name}</GalleryTitle>
              <LayoutToggle />
            </AlbumHeaderRow>
          </HeaderContainer>
        )}
        
        {album && <ImageGrid albumId={album._id} />}
      </ContentWrapper>
    </PageWrapper>
  );
});

export default function AlbumDetailPage() {
  return (
    <GalleryStoreProvider>
      <AlbumDetailPageContent />
    </GalleryStoreProvider>
  );
}
