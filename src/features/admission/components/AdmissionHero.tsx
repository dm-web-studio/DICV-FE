import { styled } from '@mui/material/styles';
import admissionHeroImg from '../../../assets/admission-hero.png';
import Box from '@mui/material/Box';

const HeroImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
});

export function AdmissionHero() {
  return (
    <Box>
      <HeroImage src={admissionHeroImg} alt="Admission Procedure Hero" />
    </Box>
  );
}
