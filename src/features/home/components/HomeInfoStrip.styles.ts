import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const InfoStripContainer = styled(Box)(({ theme }) => ({
  // Negative margin to pull it up over the hero image
  marginTop: '-80px',
  position: 'relative',
  zIndex: 10,
  [theme.breakpoints.down('sm')]: {
    marginTop: '-40px',
  },
}));

export const InfoCardWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center', // center the items horizontally
  padding: theme.spacing(4),
  width: '100%',
  borderRadius: Number(theme.shape.borderRadius) * 4, // More rounded like the design
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
}));

// We'll use a grid inside the wrapper for the 5 items
export const InfoGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: theme.spacing(3),
  width: '100%',
  
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const InfoItemBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
  
  // Add a divider line between items except the last one (using borders)
  borderRight: `1px solid ${theme.palette.divider}`,
  padding: `0 ${theme.spacing(2)}`,
  
  '&:last-child': {
    borderRight: 'none',
  },
  
  [theme.breakpoints.down('lg')]: {
    borderRight: 'none', // Remove borders on smaller screens where it wraps
    padding: 0,
  },
}));

export const IconCircle = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$isAlternate',
})<{ $isAlternate?: boolean }>(({ theme, $isAlternate }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 56,
  height: 56,
  borderRadius: '50%',
  backgroundColor: $isAlternate ? theme.palette.secondary.light : theme.palette.primary.light,
  color: $isAlternate ? theme.palette.secondary.main : theme.palette.primary.main,
  '& svg': {
    fontSize: 28,
  },
}));

export const InfoItemTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$isAlternate',
})<{ $isAlternate?: boolean }>(({ theme, $isAlternate }) => ({
  marginTop: theme.spacing(1),
  color: $isAlternate ? theme.palette.secondary.main : theme.palette.primary.main,
}));
