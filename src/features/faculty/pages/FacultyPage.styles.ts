import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const PageContainer = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto',
  width: '100%',
}));

export const CtaBannerWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6, 4),
  },
}));
