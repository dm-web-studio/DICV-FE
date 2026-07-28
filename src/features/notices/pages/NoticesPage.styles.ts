import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const PageWrapper = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const ContentContainer = styled(Container)(({ theme }) => ({
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

export const ListWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minWidth: 0,
  marginTop: theme.spacing(4),
}));
