import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const HeroContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('xs')]: {
    height: '200px',
  },
  [theme.breakpoints.up('sm')]: {
    height: '300px',
  },
  [theme.breakpoints.up('md')]: {
    height: '400px',
  },
}));

export const HeroImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});
