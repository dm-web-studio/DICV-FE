import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import heroBg from '../../../assets/campus-life-hero.png';

const HeroImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
});

export function GalleryHero() {
  return (
    <Box>
      <HeroImage src={heroBg} alt="Campus Life Hero" />
    </Box>
  );
}
