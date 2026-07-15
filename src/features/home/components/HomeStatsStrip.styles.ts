import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const StatsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  padding: theme.spacing(6, 0),
  width: '100%',
  borderRadius: Number(theme.shape.borderRadius) * 4, // Rounded corners
}));

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(4),
  padding: `0 ${theme.spacing(6)}`,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    padding: `0 ${theme.spacing(3)}`,
  },
}));

export const StatBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(1),
  
  // Add right border divider for all except last
  borderRight: `1px solid rgba(255, 255, 255, 0.2)`,
  
  '&:last-child': {
    borderRight: 'none',
  },
  
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
  },
}));

export const StatIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
  '& svg': {
    fontSize: 48,
    color: theme.palette.secondary.main,
  },
}));

export const StatNumberBox = styled(Box)({
  display: 'flex',
  alignItems: 'baseline',
});

export const StatValue = styled(Typography)(({ theme }) => ({
  fontSize: 40,
  fontWeight: 700,
  lineHeight: 1,
  marginBottom: theme.spacing(1),
}));

export const StatLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  position: 'relative',
  display: 'inline-block',
  paddingBottom: theme.spacing(2),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px',
    height: '2px',
    backgroundColor: theme.palette.secondary.main,
  },
}));
