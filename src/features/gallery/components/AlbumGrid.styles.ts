import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { GalleryLayoutMode } from '../store/GalleryUIStore';

export const GridContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'layoutMode',
})<{ layoutMode?: GalleryLayoutMode }>(({ theme, layoutMode = 'masonry' }) => ({
  ...(layoutMode === 'masonry' ? {
    columnCount: 1,
    columnGap: theme.spacing(3),
    [theme.breakpoints.up('sm')]: { columnCount: 2 },
    [theme.breakpoints.up('md')]: { columnCount: 4 },
    '& > *': {
      breakInside: 'avoid',
      marginBottom: theme.spacing(3),
    },
  } : {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: theme.spacing(3),
    [theme.breakpoints.up('sm')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
    [theme.breakpoints.up('md')]: { gridTemplateColumns: 'repeat(4, 1fr)' },
  }),
}));

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(8),
  width: '100%',
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  width: '100%',
}));
