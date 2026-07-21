import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const CounterLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isOverLimit',
})<{ isOverLimit: boolean }>(({ theme, isOverLimit }) => ({
  textAlign: 'right',
  marginTop: theme.spacing(0.5),
  color: isOverLimit ? theme.palette.error.main : theme.palette.text.secondary,
}));
