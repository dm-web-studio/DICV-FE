import { StaffDeskStoreProvider } from '../store/StaffDeskStoreContext';
import { StaffDeskContent } from '../components/StaffDeskContent';
import { ExploreDicvSection } from '../components/ExploreDicvSection';
import { PageWrapper, PageContentContainer } from './StaffDeskPage.styles';

export default function PresidentDeskPage() {
  return (
    <StaffDeskStoreProvider>
      <PageWrapper>
        <PageContentContainer maxWidth="lg">
          <StaffDeskContent type="president" />
          <ExploreDicvSection />
        </PageContentContainer>
      </PageWrapper>
    </StaffDeskStoreProvider>
  );
}
