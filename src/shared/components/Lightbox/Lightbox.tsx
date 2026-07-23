import { useEffect, type FC } from 'react';
import {
  LightboxOverlay,
  CloseButton,
  PrevButton,
  NextButton,
  ImageContainer,
  LightboxImage,
  CaptionContainer,
  CaptionText,
} from './Lightbox.styles';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface LightboxProps {
  images: { imageUrl: string; caption?: string }[];
  isOpen: boolean;
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: FC<LightboxProps> = ({ images, isOpen, activeIndex, onClose, onPrev, onNext }) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isOpen) return;

    switch (event.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrev();
        break;
      case 'ArrowRight':
        onNext();
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeIndex, images.length]);

  if (!isOpen || activeIndex === null) return null;

  const currentImage = images[activeIndex];
  if (!currentImage) return null;

  return (
    <LightboxOverlay onClick={onClose}>
      <CloseButton onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close">
        <CloseIcon />
      </CloseButton>

      {images.length > 1 && (
        <PrevButton 
          onClick={(e) => { e.stopPropagation(); onPrev(); }} 
          aria-label="Previous image"
        >
          <ArrowBackIosNewIcon />
        </PrevButton>
      )}

      <ImageContainer onClick={(e) => e.stopPropagation()}>
        <LightboxImage src={currentImage.imageUrl} alt={currentImage.caption || 'Gallery Image'} />
        {currentImage.caption && (
          <CaptionContainer>
            <CaptionText variant="body1">{currentImage.caption}</CaptionText>
          </CaptionContainer>
        )}
      </ImageContainer>

      {images.length > 1 && (
        <NextButton 
          onClick={(e) => { e.stopPropagation(); onNext(); }} 
          aria-label="Next image"
        >
          <ArrowForwardIosIcon />
        </NextButton>
      )}
    </LightboxOverlay>
  );
};
