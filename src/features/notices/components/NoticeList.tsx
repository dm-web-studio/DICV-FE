import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import { useNoticeStore } from '../store/NoticeStoreContext';
import { NoticeCard } from './NoticeCard';
import { 
  ContainerCard, 
  ListContainer, 
  HeaderRow, 
  PaginationWrapper,
  ListTitleIcon,
  ListTitle,
  LoadingContainer,
  MessageText
} from './NoticeList.styles';

export const NoticeList = observer(function NoticeList() {
  const { domain, ui } = useNoticeStore();

  useEffect(() => {
    if (domain.scrollTargetSlug) {
      const element = document.getElementById(`notice-item-${domain.scrollTargetSlug}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      domain.clearScrollTarget();
    }
  }, [domain.scrollTargetSlug, domain]);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    ui.setPage(value);
  };

  return (
    <ContainerCard>
      <HeaderRow>
        <ListTitleIcon />
        <ListTitle variant="h2">All Notices</ListTitle>
      </HeaderRow>

      {domain.isLoading ? (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : domain.error ? (
        <MessageText color="error">
          {domain.error}
        </MessageText>
      ) : domain.notices.length === 0 ? (
        <MessageText color="text.secondary">
          No notices found matching your criteria.
        </MessageText>
      ) : (
        <ListContainer>
          {domain.notices.map((notice, index) => (
            <NoticeCard key={notice.slug} notice={notice} isLatest={index === 0} />
          ))}
        </ListContainer>
      )}

      {domain.totalPages > 1 && (
        <PaginationWrapper>
          <Pagination
            count={domain.totalPages}
            page={ui.page}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
          />
        </PaginationWrapper>
      )}
    </ContainerCard>
  );
});

