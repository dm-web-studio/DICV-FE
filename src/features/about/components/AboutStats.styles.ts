import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const StripContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: Number(theme.shape.borderRadius) * 4,
  boxShadow: '0 20px 45px rgba(11,28,74,.14)',
  margin: '-30px auto 0',
  maxWidth: '1180px',
  padding: theme.spacing(6.5, 5),
  position: 'relative',
  zIndex: 3,
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(3),
  },
}));

export const StatBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  borderRight: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  '&:last-child': {
    borderRight: 'none',
  },
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    gap: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:last-child': {
      borderBottom: 'none',
      paddingBottom: 0,
    },
  },
}));

export const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'colorType',
})<{ colorType: 'primary' | 'secondary' }>(({ theme, colorType }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: colorType === 'primary' ? theme.badgeColors.blue.bg : theme.badgeColors.orange.bg,
  color: colorType === 'primary' ? theme.palette.primary.main : theme.palette.secondary.dark,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    marginBottom: 0,
  },
  '& svg': {
    fontSize: 24,
  },
}));

export const StatTextWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
  }
}));

export const StatValue = styled(Typography)(({ theme }) => ({
  fontSize: 28,
  fontWeight: 800,
  marginTop: theme.spacing(1),
  letterSpacing: '-0.5px',
  lineHeight: 1.2,
  color: theme.palette.primary.main,
}));

export const StatLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontSize: '11px',
  marginTop: theme.spacing(0.5),
  color: theme.palette.text.secondary,
}));
