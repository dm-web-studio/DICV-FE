import type { FC } from 'react';
import type { GalleryImage as GalleryImageType } from '../types';
import { useGalleryStore } from '../store/GalleryStoreContext';
import {
  StyledImageCard,
  ImageWrapper,
  GalleryImage,
} from './GalleryImageCard.styles';
import type { GalleryLayoutMode } from '../store/GalleryUIStore';

interface GalleryImageCardProps {
  image: GalleryImageType;
  index: number;
  layoutMode?: GalleryLayoutMode;
}

export const GalleryImageCard: FC<GalleryImageCardProps> = ({ image, index, layoutMode = 'masonry' }) => {
  const { ui } = useGalleryStore();

  const handleClick = () => {
    ui.openLightbox(index);
  };

  return (
    <StyledImageCard onClick={handleClick} aria-label={`View image ${index + 1}`} layoutMode={layoutMode}>
      <ImageWrapper layoutMode={layoutMode}>
        <GalleryImage src={image.imageUrl} alt={image.caption || `Gallery image ${index + 1}`} loading="lazy" layoutMode={layoutMode} />
      </ImageWrapper>
    </StyledImageCard>
  );
};
