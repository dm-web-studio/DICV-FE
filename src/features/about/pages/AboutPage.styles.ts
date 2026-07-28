import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

export const PageContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
}));
