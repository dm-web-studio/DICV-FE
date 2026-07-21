import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const PageLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  backgroundColor: theme.palette.grey[50],
  overflow: 'hidden',
}));

export const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  height: '100%',
  padding: theme.spacing(4),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));
