import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { useGalleryStore } from '../store/GalleryStoreContext';
import { GalleryImageCard } from './GalleryImageCard';
import { GridContainer, LoadingContainer, MessageText, LoadMoreContainer } from './ImageGrid.styles';
import { Lightbox } from '../../../shared/components/Lightbox/Lightbox';
import { GalleryEmptyState } from './GalleryEmptyState';

interface ImageGridProps {
  albumId: string;
}

export const ImageGrid = observer(function ImageGrid({ albumId }: ImageGridProps) {
  const { domain, ui } = useGalleryStore();

  const album = domain.albums.find(a => a._id === albumId);
  const images = (domain.albumImages[albumId] || []).filter(img => img.imageUrl !== album?.coverImageUrl);

  useEffect(() => {
    // Fetch initial page of images if not already loaded
    if (!domain.albumImages[albumId] && !domain.isLoadingImages) {
      void domain.fetchAlbumImages(albumId, 1);
    }
  }, [albumId, domain]);

  const handleLoadMore = () => {
    if (domain.imagesMeta && !domain.isLoadingImages) {
      const nextPage = domain.imagesMeta.page + 1;
      void domain.fetchAlbumImages(albumId, nextPage);
    }
  };

  const hasMore = domain.imagesMeta ? domain.imagesMeta.page * domain.imagesMeta.limit < domain.imagesMeta.total : false;

  if (domain.isLoadingImages && images.length === 0) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  if (domain.error && images.length === 0) {
    return (
      <MessageText color="error">
        {domain.error}
      </MessageText>
    );
  }

  if (images.length === 0) {
    return (
      <GalleryEmptyState
        icon={<InsertPhotoOutlinedIcon />}
        title="No Images Found"
        description="This album doesn't have any images yet. Check back later!"
      />
    );
  }

  return (
    <>
      <GridContainer layoutMode={ui.layoutMode}>
        {images.map((image, index) => (
          <GalleryImageCard
            key={image._id}
            image={image}
            index={index}
            layoutMode={ui.layoutMode}
          />
        ))}
      </GridContainer>

      {hasMore && (
        <LoadMoreContainer>
          <Button
            variant="outlined"
            onClick={handleLoadMore}
            disabled={domain.isLoadingImages}
          >
            {domain.isLoadingImages ? <CircularProgress size={20} /> : 'Load More'}
          </Button>
        </LoadMoreContainer>
      )}

      {/* Render the lightbox component here so it can access the images list */}
      <Lightbox 
        images={images}
        isOpen={ui.isLightboxOpen}
        activeIndex={ui.activeImageIndex}
        onClose={() => ui.closeLightbox()}
        onPrev={() => ui.prevImage(images.length)}
        onNext={() => ui.nextImage(images.length)}
      />
    </>
  );
});
