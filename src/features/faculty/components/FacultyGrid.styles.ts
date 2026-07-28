import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const GridContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(4, 2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6, 4),
  },
}));

export const FlexContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(6), // 24px
  width: '100%',
}));

export const FlexItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  maxWidth: 320,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'calc(50% - 12px)',
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(33.333% - 16px)',
  },
}));
