import Box from '@mui/material/Box';
import { AboutHero } from '../components/AboutHero';
import { AboutStats } from '../components/AboutStats';
import { AboutMissionVision } from '../components/AboutMissionVision';
import { AboutWhyChooseUs } from '../components/AboutWhyChooseUs';
import { AboutSports } from '../components/AboutSports';
import { AboutAchievementsFaculty } from '../components/AboutAchievementsFaculty';
import { CtaBanner } from '../../../shared/components/CtaBanner';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
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
        <CtaBanner 
          title="Ready to see the campus for yourself?"
          subtitle="Book a visit or start your child's admission for the upcoming academic year."
          buttonText="Start admission"
          buttonLink="/admission"
          icon={<EventAvailableOutlinedIcon />}
        />
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
