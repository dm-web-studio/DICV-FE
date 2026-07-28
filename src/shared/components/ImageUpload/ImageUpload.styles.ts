import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export const ImageSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const ImagePreviewBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 120,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.action.hover,
}));

export const ImagePreview = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const HelperText = styled(Typography)(({ theme }) => ({
  display: 'block',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  marginTop: theme.spacing(0.5),
}));

export const RemoveIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 8,
  right: 8,
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.common.white,
  },
}));

export const UploadButton = styled(Button)(({ theme }) => ({
  height: 100,
  borderStyle: 'dashed',
  marginBottom: theme.spacing(1),
}));
