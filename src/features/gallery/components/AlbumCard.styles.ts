import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import type { GalleryLayoutMode } from '../store/GalleryUIStore';

export const StyledAlbumCard = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'layoutMode',
})<{ layoutMode?: GalleryLayoutMode }>(({ theme, layoutMode = 'masonry' }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  ...(layoutMode === 'grid' && { height: '100%' }),
  borderRadius: 16,
  overflow: 'hidden',
  textDecoration: 'none',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  backgroundColor: theme.palette.background.paper,
  // Initial state has subtle shadow
  boxShadow: theme.shadows[1],
  '&:hover': {
    // Soft elevation/scale on hover
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

export const CoverImage = styled('img', {
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

// Subtle bottom gradient overlay for text legibility
export const GradientOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '50%', // Gradient covers bottom half
  background: `linear-gradient(to top, ${alpha(theme.palette.common.black, 0.8)} 0%, ${alpha(theme.palette.common.black, 0)} 100%)`,
  display: 'flex',
  alignItems: 'flex-end',
  padding: theme.spacing(2),
}));

export const AlbumTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeightMedium,
  // Truncate text if it's too long
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));
