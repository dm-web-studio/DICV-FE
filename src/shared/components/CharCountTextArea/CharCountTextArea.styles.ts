import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const CounterLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isOverLimit',
})<{ isOverLimit: boolean }>(({ theme, isOverLimit }) => ({
  textAlign: 'right',
  color: isOverLimit ? theme.palette.error.main : theme.palette.text.secondary,
}));

export const CounterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: theme.spacing(0.5),
  gap: theme.spacing(0.5),
}));
