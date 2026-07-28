import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const PageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
  paddingTop: 0,
  paddingBottom: 0,
}));

export const PageContentContainer = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
