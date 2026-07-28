import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import heroBg from '../../../assets/notice-hero-bg.png';

const HeroImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
});

export function NoticeHero() {
  return (
    <Box>
      <HeroImage src={heroBg} alt="Notices Hero" />
    </Box>
  );
}
