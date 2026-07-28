import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { NoticeStoreProvider } from '../store/NoticeStoreContext';
import { NoticeHero } from '../components/NoticeHero';
import { NoticeFilters } from '../components/NoticeFilters';
import { NoticeList } from '../components/NoticeList';
import { PageWrapper, ContentContainer, ListWrapper } from './NoticesPage.styles';

const NoticesPageContent = observer(function NoticesPageContent() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has('highlight')) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('highlight');
      setSearchParams(newParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return (
    <PageWrapper>
      <NoticeHero />
      <ContentContainer maxWidth="lg">
        <NoticeFilters />
        
        <ListWrapper>
          <NoticeList />
        </ListWrapper>
      </ContentContainer>
    </PageWrapper>
  );
});

export default function NoticesPage() {
  return (
    <NoticeStoreProvider>
      <NoticesPageContent />
    </NoticeStoreProvider>
  );
}
