import Box from '@mui/material/Box';
import { AboutHero } from '../components/AboutHero';
import { AboutStats } from '../components/AboutStats';
import { AboutMissionVision } from '../components/AboutMissionVision';
import { AboutWhyChooseUs } from '../components/AboutWhyChooseUs';
import { AboutSports } from '../components/AboutSports';
import { AboutAchievementsFaculty } from '../components/AboutAchievementsFaculty';
import { AboutCTA } from '../components/AboutCTA';
import { PageContainer } from './AboutPage.styles';
import { AboutStoreProvider } from '../store/AboutStoreContext';

function AboutPageContent() {
  return (
    <Box component="main">
      <AboutHero />
      <PageContainer maxWidth="lg">
        <Box sx={{ mt: { xs: '-24px', md: '-46px' }, position: 'relative', zIndex: 10 }}>
          <AboutStats />
        </Box>
        <AboutMissionVision />
        <AboutWhyChooseUs />
        <AboutSports />
        <AboutAchievementsFaculty />
        <AboutCTA />
      </PageContainer>
    </Box>
  );
}

export function AboutPage() {
  return (
    <AboutStoreProvider>
      <AboutPageContent />
    </AboutStoreProvider>
  );
}
