import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const HeroContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(12, 4),
  backgroundColor: theme.palette.background.default,
}));

export const Underline = styled(Box)(({ theme }) => ({
  width: 60,
  height: 4,
  backgroundColor: theme.palette.secondary.main,
  margin: '16px auto 24px',
}));

export const HeroText = styled(Typography)(() => ({
  maxWidth: 600,
  margin: '0 auto',
}));
