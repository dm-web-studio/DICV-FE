import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import type { GalleryLayoutMode } from '../store/GalleryUIStore';

export const StyledImageCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'layoutMode',
})<{ layoutMode?: GalleryLayoutMode }>(({ theme, layoutMode = 'masonry' }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  ...(layoutMode === 'grid' && { height: '100%' }),
  borderRadius: 16,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

export const ImageWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'layoutMode',
})<{ layoutMode?: GalleryLayoutMode }>(({ layoutMode = 'masonry' }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  ...(layoutMode === 'grid' && {
    display: 'block',
    paddingTop: '66.66%',
  }),
}));

export const GalleryImage = styled('img', {
  shouldForwardProp: (prop) => prop !== 'layoutMode',
})<{ layoutMode?: GalleryLayoutMode }>(({ layoutMode = 'masonry' }) => ({
  width: '100%',
  height: 'auto',
  display: 'block',
  ...(layoutMode === 'grid' && {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    objectFit: 'cover',
  }),
}));
