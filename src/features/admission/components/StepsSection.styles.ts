import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const SectionContainer = styled(Box)(() => ({
  // padding handled by parent container's gap
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 800,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(8),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -12,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 60,
    height: 3,
    backgroundColor: theme.palette.secondary.main,
  }
}));

export const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(16),
  position: 'relative',
  marginTop: theme.spacing(20),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: theme.spacing(6),
  },
}));

export const ConnectingLine = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: '10%',
    right: '10%',
    height: '2px',
    borderTop: `2px dashed ${theme.palette.divider}`,
    zIndex: 0,
  },
}));

export const StepCard = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(15, 6, 8, 6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  border: `1px solid ${theme.palette.divider}`,
}));

export const IconOuter = styled(Box)(({ theme }) => ({
  width: 88,
  height: 88,
  borderRadius: '50%',
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: -44,
  left: '50%',
  transform: 'translateX(-50%)',
  border: `1px solid ${theme.palette.divider}`,
}));

export const IconInner = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'colorType',
})<{ colorType: 'primary' | 'secondary' }>(({ theme, colorType }) => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  backgroundColor: theme.palette[colorType].main,
  color: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 32,
}));

export const BottomBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'colorType',
})<{ colorType: 'primary' | 'secondary' }>(({ theme, colorType }) => {
  const badgeTheme = colorType === 'primary' ? theme.badgeColors.blue : theme.badgeColors.orange;
  return {
    position: 'absolute',
    bottom: -16,
    left: '50%',
    transform: 'translateX(-50%)',
    height: 32,
    padding: theme.spacing(0, 4),
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: badgeTheme.bg,
    color: badgeTheme.text,
    border: `2px solid ${theme.palette.background.paper}`,
    ...theme.typography.caption,
    fontWeight: 600,
    whiteSpace: 'nowrap',
  };
});

export const StepNumber = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'colorType',
})<{ colorType: 'primary' | 'secondary' }>(({ theme, colorType }) => ({
  color: theme.palette[colorType].main,
  marginBottom: theme.spacing(2),
}));

export const StepTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  marginBottom: theme.spacing(3),
}));

export const StepDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  flex: 1,
  color: theme.palette.text.secondary,
}));
