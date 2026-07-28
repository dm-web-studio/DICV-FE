import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import aboutHeroBg from '../../../assets/about-hero.png';

const HeroImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
});

export const AboutHero = () => {
  return (
    <Box>
      <HeroImage src={aboutHeroBg} alt="About Us Hero" />
    </Box>
  );
};
