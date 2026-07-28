import { styled, alpha } from '@mui/material/styles';
import { Box, Paper, Stack, Button, Typography } from '@mui/material';

export const PhotosPanelContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: theme.spacing(4),
}));

export const HeaderStack = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const HeaderTitle = styled(Typography)({});

export const DeleteAllButton = styled(Button)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  fontWeight: 600,
}));

export const PhotosScrollArea = styled(Box)({
  flex: 1,
  overflowY: 'auto',
});

export const LoadingContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export const EmptyStateContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  minHeight: 400,
  border: '2px dashed',
  borderColor: theme.palette.divider,
  borderRadius: (theme.shape.borderRadius as number) * 2,
  backgroundColor: theme.palette.background.default,
  gap: theme.spacing(2),
}));

export const EmptyStateIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: '50%',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
}));

export const EmptyStateTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const EmptyStateSubtitle = styled(Typography)({
  textAlign: 'center',
  maxWidth: 350,
});

export const PhotoGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: theme.spacing(2),
}));

export const PhotoItem = styled(Paper)(({ theme }) => ({
  position: 'relative',
  paddingTop: '75%', // 4:3 aspect ratio
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  boxShadow: theme.shadows[1],
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
  '&:hover .delete-overlay': {
    opacity: 1,
  },
}));

export const DeleteOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: 1,
  backgroundColor: alpha(theme.palette.background.paper, 0.9),
  borderRadius: '50%',
  opacity: 0,
  transition: 'opacity 0.2s',
  boxShadow: theme.shadows[2],
}));
