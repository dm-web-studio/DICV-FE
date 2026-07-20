import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { PageContainer, CtaBannerWrapper } from './FacultyPage.styles';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import { FacultyStoreProvider, useFacultyStore } from '../store/FacultyStoreContext';
import { FacultyHero } from '../components/FacultyHero';
import { FacultyIntroSection } from '../components/FacultyIntroSection';
import { FacultyGrid } from '../components/FacultyGrid';
import { CtaBanner } from '../../../shared/components/CtaBanner';

function FacultyPageContent() {
  const { domain } = useFacultyStore();

  useEffect(() => {
    void domain.fetchAll();
  }, [domain]);

  return (
    <Box component="main">
      <FacultyHero />
      
      <PageContainer>
        <FacultyIntroSection />
        <FacultyGrid />
        
        <CtaBannerWrapper>
          <CtaBanner
            title="Become a Part of Our Team"
            subtitle="We are always looking for passionate educators to join our mission."
            buttonText="VIEW OPENINGS"
            buttonLink="/contact"
            icon={<GroupAddOutlinedIcon />}
          />
        </CtaBannerWrapper>
      </PageContainer>
    </Box>
  );
}

export default function FacultyPage() {
  return (
    <FacultyStoreProvider>
      <FacultyPageContent />
    </FacultyStoreProvider>
  );
}
