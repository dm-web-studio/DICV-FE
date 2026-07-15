import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CircularProgress from '@mui/material/CircularProgress';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import { useGalleryStore } from '../store/GalleryStoreContext';
import { AlbumCard } from './AlbumCard';
import { GridContainer, LoadingContainer, MessageText } from './AlbumGrid.styles';
import { GalleryEmptyState } from './GalleryEmptyState';

export const AlbumGrid = observer(function AlbumGrid() {
  const { domain, ui } = useGalleryStore();

  useEffect(() => {
    // Only fetch if we haven't loaded albums yet
    if (domain.albums.length === 0 && !domain.isLoadingAlbums) {
      void domain.fetchAlbums();
    }
  }, [domain]);

  if (domain.isLoadingAlbums && domain.albums.length === 0) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  if (domain.error) {
    return (
      <MessageText color="error">
        {domain.error}
      </MessageText>
    );
  }

  if (domain.albums.length === 0) {
    return (
      <GalleryEmptyState
        icon={<PhotoAlbumOutlinedIcon />}
        title="No Albums Yet"
        description="Check back later for new photo galleries and event highlights."
      />
    );
  }

  return (
    <GridContainer layoutMode={ui.layoutMode}>
      {domain.albums.map((album) => (
        <AlbumCard key={album.slug} album={album} layoutMode={ui.layoutMode} />
      ))}
    </GridContainer>
  );
});
