import { useEffect, type FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useGalleryStore } from '../store/GalleryStoreContext';
import type { GalleryImage as GalleryImageType } from '../types';
import {
  LightboxOverlay,
  CloseButton,
  PrevButton,
  NextButton,
  ImageContainer,
  LightboxImage,
  CaptionContainer,
  CaptionText,
} from './ImageLightbox.styles';
// Assuming you have an icon set, I'll use standard character entities or MUI icons if available. 
// Using standard characters for now to avoid missing imports, but usually it would be <CloseIcon />, <ArrowBackIosNewIcon />, etc.
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ImageLightboxProps {
  images: GalleryImageType[];
}

export const ImageLightbox: FC<ImageLightboxProps> = observer(({ images }) => {
  const { ui } = useGalleryStore();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!ui.isLightboxOpen) return;

    switch (event.key) {
      case 'Escape':
        ui.closeLightbox();
        break;
      case 'ArrowLeft':
        ui.prevImage(images.length);
        break;
      case 'ArrowRight':
        ui.nextImage(images.length);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ui.isLightboxOpen, images.length]); // handleKeyDown depends on these implicitly

  if (!ui.isLightboxOpen || ui.activeImageIndex === null) return null;

  const currentImage = images[ui.activeImageIndex];
  if (!currentImage) return null;

  return (
    <LightboxOverlay onClick={() => ui.closeLightbox()}>
      <CloseButton onClick={(e) => { e.stopPropagation(); ui.closeLightbox(); }} aria-label="Close">
        <CloseIcon />
      </CloseButton>

      <PrevButton 
        onClick={(e) => { e.stopPropagation(); ui.prevImage(images.length); }} 
        aria-label="Previous image"
      >
        <ArrowBackIosNewIcon />
      </PrevButton>

      <ImageContainer onClick={(e) => e.stopPropagation()}>
        <LightboxImage src={currentImage.imageUrl} alt={currentImage.caption || 'Gallery Image'} />
        {currentImage.caption && (
          <CaptionContainer>
            <CaptionText variant="body1">{currentImage.caption}</CaptionText>
          </CaptionContainer>
        )}
      </ImageContainer>

      <NextButton 
        onClick={(e) => { e.stopPropagation(); ui.nextImage(images.length); }} 
        aria-label="Next image"
      >
        <ArrowForwardIosIcon />
      </NextButton>
    </LightboxOverlay>
  );
});
