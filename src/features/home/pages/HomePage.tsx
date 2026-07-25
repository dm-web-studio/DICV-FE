import { styled } from '@mui/material/styles';
import { HomeStoreProvider } from '../store/HomeStoreContext';
import { HomeHero } from '../components/HomeHero';
import { HomeInfoStrip } from '../components/HomeInfoStrip';
import { HomeStatsStrip } from '../components/HomeStatsStrip';
import { HomePrincipalSection } from '../components/HomePrincipalSection';
import { HomeNoticesGallerySection } from '../components/HomeNoticesGallerySection';
import { NoticePopupModal } from '../components/NoticePopupModal';



import Container from '@mui/material/Container';

const StrictContentWrapper = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  gap: '24px',
  backgroundColor: theme.palette.background.default,
}));


export function HomePage() {
  return (
    <HomeStoreProvider>
      <HomeHero />
      <StrictContentWrapper maxWidth="lg">
        <HomeInfoStrip />
        <HomeStatsStrip />
        <HomePrincipalSection />
        <HomeNoticesGallerySection />
      </StrictContentWrapper>
      <NoticePopupModal />
    </HomeStoreProvider>
  );
}
