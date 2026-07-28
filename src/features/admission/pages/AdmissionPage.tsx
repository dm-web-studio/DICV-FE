import Box from '@mui/material/Box';
import { AdmissionStoreProvider } from '../store/AdmissionStoreContext';
import { AdmissionHero } from '../components/AdmissionHero';
import { StepsSection } from '../components/StepsSection';
import { NoticeCallout } from '../components/NoticeCallout';
import { DocumentsRequiredCard } from '../components/DocumentsRequiredCard';
import { FaqCard } from '../components/FaqCard';
import { CtaBanner } from '../../../shared/components/CtaBanner';
import MessageIcon from '@mui/icons-material/MessageOutlined';
import { PageContainer, TwoColumnSection } from './AdmissionPage.styles';

function AdmissionPageContent() {
  return (
    <Box component="main">
      <AdmissionHero />
      <PageContainer maxWidth="lg">
        <StepsSection />
        <NoticeCallout />
        <TwoColumnSection>
          <DocumentsRequiredCard />
          <FaqCard />
        </TwoColumnSection>
        <CtaBanner 
          title="Have more questions?"
          subtitle="Our admission team is here to help you."
          buttonText="Contact Admission Office"
          buttonLink="/contact"
          icon={<MessageIcon />}
        />
      </PageContainer>
    </Box>
  );
}

export default function AdmissionPage() {
  return (
    <AdmissionStoreProvider>
      <AdmissionPageContent />
    </AdmissionStoreProvider>
  );
}
