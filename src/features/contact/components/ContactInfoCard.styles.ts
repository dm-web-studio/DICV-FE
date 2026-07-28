import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const InfoCardRoot = styled(Card)(({ theme }) => ({
  padding: theme.spacing(6),
  flex: 1,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: (theme.shape.borderRadius as number) * 1.5,
  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  position: 'relative',
  overflow: 'hidden',
}));

export const CardSkeleton = styled(Skeleton)({
  backgroundColor: 'rgba(255,255,255,0.1)',
});

export const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 1,
});

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

export const InfoStack = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}));

export const InfoLabel = styled(Typography)({
  fontWeight: 'bold',
});

export const InfoText = styled(Typography)({
  opacity: 0.85,
  transition: 'opacity 0.3s ease',
  '.MuiBox-root:hover &': {
    opacity: 1,
  },
});

export const VisitButton = styled(Button)<ButtonProps<'a'>>(({ theme }) => ({
  borderColor: 'inherit',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    '& .MuiSvgIcon-root': {
      transform: 'translateX(4px)',
    },
  },
}));

export const ButtonIcon = styled(ArrowForwardIcon)({
  transition: 'transform 0.3s ease',
});

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: '50%',
  border: `1px solid ${theme.palette.secondary.main}`,
  flexShrink: 0,
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  backgroundColor: 'transparent',
  color: 'inherit',
}));

export const InfoRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(4),
  cursor: 'default',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateX(8px)',
    '& > div:first-of-type': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      transform: 'scale(1.15)',
      border: `1px solid transparent`,
    }
  },
}));

export const Divider = styled(Box)(({ theme }) => ({
  width: 40,
  height: 2,
  backgroundColor: theme.palette.secondary.main,
  margin: '8px 0 24px',
}));
