import type { FC } from 'react';
import type { Album } from '../types';
import {
  StyledAlbumCard,
  ImageWrapper,
  CoverImage,
  GradientOverlay,
  AlbumTitle,
} from './AlbumCard.styles';

import type { GalleryLayoutMode } from '../store/GalleryUIStore';

interface AlbumCardProps {
  album: Album;
  layoutMode?: GalleryLayoutMode;
}

export const AlbumCard: FC<AlbumCardProps> = ({ album, layoutMode = 'masonry' }) => {
  return (
    <StyledAlbumCard to={`/gallery/${album.slug}`} layoutMode={layoutMode}>
      <ImageWrapper layoutMode={layoutMode}>
        <CoverImage src={album.coverImageUrl} alt={album.name} loading="lazy" layoutMode={layoutMode} />
        <GradientOverlay>
          <AlbumTitle variant="h3">{album.name}</AlbumTitle>
        </GradientOverlay>
      </ImageWrapper>
    </StyledAlbumCard>
  );
};
