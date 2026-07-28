import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const TitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));
