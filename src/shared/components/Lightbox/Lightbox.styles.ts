import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export const LightboxOverlay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: alpha(theme.palette.common.black, 0.9),
  zIndex: theme.zIndex.modal,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  color: theme.palette.common.white,
  zIndex: 1,
}));

export const NavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.common.black, 0.3),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.5),
  },
  zIndex: 1,
}));

export const PrevButton = styled(NavButton)(({ theme }) => ({
  left: theme.spacing(2),
}));

export const NextButton = styled(NavButton)(({ theme }) => ({
  right: theme.spacing(2),
}));

export const ImageContainer = styled(Box)({
  position: 'relative',
  maxWidth: '90vw',
  maxHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const LightboxImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '80vh',
  objectFit: 'contain',
  display: 'block',
});

export const CaptionContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.common.white,
  textAlign: 'center',
  maxWidth: '100%',
  padding: theme.spacing(0, 2),
}));

export const CaptionText = styled(Typography)({});
