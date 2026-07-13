import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

export const PageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingBottom: theme.spacing(6),
}));

export const ContentContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6),
}));

// Replicating Stack direction={{ xs: 'column', md: 'row' }} spacing={6} natively
export const ContentStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const MapWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
}));
