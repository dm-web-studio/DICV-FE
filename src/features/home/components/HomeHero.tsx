import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import homeHeroImg from '../../../assets/home-hero.png';

const HeroImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
});

export function HomeHero() {
  return (
    <Box>
      <HeroImage src={homeHeroImg} alt="DICV Public High School Campus" />
    </Box>
  );
}
