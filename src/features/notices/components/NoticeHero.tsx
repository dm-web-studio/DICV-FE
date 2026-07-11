import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import heroBg from '../../../assets/notice-hero-bg.png';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage: `url(${heroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  // Set a responsive min-height to ensure the hero image is visible 
  // without relying on text content to push it down.
  minHeight: 250,
  [theme.breakpoints.up('sm')]: {
    minHeight: 350,
  },
  [theme.breakpoints.up('md')]: {
    minHeight: 450,
  },
  position: 'relative',
  overflow: 'hidden',
}));

export function NoticeHero() {
  return <HeroContainer />;
}
