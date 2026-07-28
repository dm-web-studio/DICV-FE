import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const DrawerContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  flex: 1,
  overflowY: 'auto',
}));

