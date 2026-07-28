import facultyHeroImage from '../../../assets/faculty-hero.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const HeroImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
});

export function FacultyHero() {
  return (
    <Box>
      <HeroImage src={facultyHeroImage} alt="Faculty Hero" />
    </Box>
  );
}
