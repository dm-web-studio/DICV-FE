import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export const UploaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const DropzoneArea = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDragging' && prop !== 'isError',
})<{ isDragging: boolean; isError: boolean }>(({ theme, isDragging, isError }) => ({
  border: `2px dashed ${
    isError 
      ? theme.palette.error.main 
      : isDragging 
        ? theme.palette.primary.main 
        : theme.palette.divider
  }`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: isDragging ? theme.palette.action.hover : theme.palette.background.paper,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderColor: isError ? theme.palette.error.main : theme.palette.primary.main,
  },
}));

export const ItemList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const ItemRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

export const ImagePreview = styled('img')(({ theme }) => ({
  width: 48,
  height: 48,
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.action.disabledBackground,
}));

export const ItemDetails = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const ItemName = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

export const ItemStatus = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 4, // 1 unit in our theme where spacing(1) = 4px
});

export const ActionButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
}));
