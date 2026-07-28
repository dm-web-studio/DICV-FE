import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const IntroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(10, 4),
  gap: theme.spacing(2),
}));

export const Eyebrow = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main, // gold/accent
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '0.1em',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const Subtext = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: '600px',
  marginTop: theme.spacing(2),
}));
