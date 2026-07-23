import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Typography, IconButton, CircularProgress } from '@mui/material';
import { Delete as DeleteIcon, PhotoLibraryOutlined as PhotoLibraryIcon } from '@mui/icons-material';
import { useAdminGalleryStore } from '../store/AdminGalleryStoreContext';
import { Lightbox } from '../../../shared/components/Lightbox/Lightbox';
import { showConfirmation } from '../../../shared/stores/ConfirmDialogStore';

import { 
  PhotosPanelContainer, 
  HeaderStack, 
  HeaderTitle, 
  DeleteAllButton, 
  PhotosScrollArea, 
  LoadingContainer, 
  EmptyStateContainer, 
  EmptyStateIconWrapper, 
  EmptyStateTitle, 
  EmptyStateSubtitle, 
  PhotoGrid, 
  PhotoItem, 
  DeleteOverlay 
} from './AlbumPhotosPanel.styles';
export const AlbumPhotosPanel = observer(function AlbumPhotosPanel() {
  const { domain, ui } = useAdminGalleryStore();

  const album = domain.selectedAlbum;
  const photos = domain.photos.filter(p => p.imageUrl !== album?.coverImageUrl);

  const handleDeleteSingle = (photoId: string) => {
    showConfirmation({
      title: 'Delete Photo',
      message: 'Are you sure you want to delete this photo?',
      confirmLabel: 'Delete',
      variant: 'error',
      onConfirm: async () => {
        await domain.deletePhotos([photoId]);
      }
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (ui.previewPhotoIndex === null) return;
      if (e.key === 'ArrowLeft') ui.prevPhoto(photos.length);
      if (e.key === 'ArrowRight') ui.nextPhoto(photos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [ui, photos.length]);

  if (!album) {
    return null; // Don't show panel if no album selected
  }

  const handleDeleteAll = () => {
    showConfirmation({
      title: 'Delete All Photos',
      message: `Are you sure you want to delete ALL ${photos.length} photos in this album? This cannot be undone.`,
      confirmLabel: 'Delete All',
      variant: 'error',
      onConfirm: async () => {
        await domain.deletePhotos(photos.map(p => p._id));
      }
    });
  };


  return (
    <PhotosPanelContainer>
      <HeaderStack>
        <HeaderTitle variant="h2">
          Album Photos <Typography component="span" variant="body1" color="text.secondary">({photos.length})</Typography>
        </HeaderTitle>

        {photos.length > 0 && (
          <DeleteAllButton 
            variant="outlined" 
            color="error" 
            startIcon={<DeleteIcon sx={{ fontSize: 18 }} />}
            onClick={handleDeleteAll}
            disabled={domain.isSaving}
          >
            Delete All ({photos.length})
          </DeleteAllButton>
        )}
      </HeaderStack>

      <PhotosScrollArea>
        {domain.isPhotosLoading ? (
          <LoadingContainer>
            <CircularProgress />
          </LoadingContainer>
        ) : photos.length === 0 ? (
          <EmptyStateContainer>
            <EmptyStateIconWrapper>
              <PhotoLibraryIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
            </EmptyStateIconWrapper>
            <EmptyStateTitle variant="h2">No Photos Yet</EmptyStateTitle>
            <EmptyStateSubtitle variant="body1" color="text.secondary">
              This album is currently empty. Use the "Upload Photos" button in the album details panel to start adding images.
            </EmptyStateSubtitle>
          </EmptyStateContainer>
        ) : (
          <PhotoGrid>
            {photos.map((photo, index) => {
              return (
                <PhotoItem 
                  key={photo._id} 
                  sx={{ backgroundImage: `url(${photo.imageUrl})` }}
                  onClick={() => ui.openPhotoPreview(index)}
                >
                  <DeleteOverlay className="delete-overlay">
                    <IconButton 
                      size="small" 
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteSingle(photo._id);
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </DeleteOverlay>
                </PhotoItem>
              );
            })}
          </PhotoGrid>
        )}
      </PhotosScrollArea>

      {/* Full Image Preview Dialog */}
      <Lightbox
        images={photos}
        isOpen={ui.previewPhotoIndex !== null}
        activeIndex={ui.previewPhotoIndex}
        onClose={() => ui.closePhotoPreview()}
        onPrev={() => ui.prevPhoto(photos.length)}
        onNext={() => ui.nextPhoto(photos.length)}
      />
    </PhotosPanelContainer>
  );
});
