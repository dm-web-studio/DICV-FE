import type { FC } from 'react';
import { ContactStoreProvider } from '../store/ContactStoreContext';
import { ContactHero } from '../components/ContactHero';
import { ContactForm } from '../components/ContactForm';
import { ContactInfoCard } from '../components/ContactInfoCard';
import { ContactMapSection } from '../components/ContactMapSection';
import { PageWrapper, ContentContainer, ContentStack, MapWrapper } from './ContactPage.styles';

export const ContactPage: FC = () => {
  return (
    <ContactStoreProvider>
      <PageWrapper>
        <ContactHero />
        <ContentContainer maxWidth="lg">
          <ContentStack>
            <ContactForm />
            <ContactInfoCard />
          </ContentStack>
          <MapWrapper>
            <ContactMapSection />
          </MapWrapper>
        </ContentContainer>
      </PageWrapper>
    </ContactStoreProvider>
  );
};

export default ContactPage;
