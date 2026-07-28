import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useHomeStore } from '../store/HomeStoreContext';
import { formatMonth, formatDay, formatFullDate, formatTime } from '../../../shared/utils/dateUtils';
import {
  SectionContainer,
  DecorativeTitle,
  SectionHeader,
  NoticeItemCard,
  DateBox,
  NewBadge,

  GalleryGrid,
  GalleryImageWrapper,
  ViewAllLink,
  NoticeDayText,
  NoticeMonthText,
  NoticeTitleText,
  NoticesColumn,
  GalleryColumn,
  EmptyStateText,
  NoticeLinkWrapper,
  NoticeContentColumn,
  NoticeTitleRow,
  NoticeBadgesWrapper,
  NoticeMetaRow,
  NoticeMetaItem,
  NoticeMetaText,
  NoticeMetaDivider,
} from './HomeNoticesGallerySection.styles';

import { NoticeCategoryBadge } from '../../../shared/components/NoticeCategoryBadge';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const HomeNoticesGallerySection = observer(function HomeNoticesGallerySection() {

  const { notices, domain, gallery } = useHomeStore();
  
  const noticesData = domain.latestNotices;
  const { isLoading: noticesLoading, error: noticesError } = notices.domain;

  const highlights = gallery.domain.highlights;
  const isLoadingGallery = gallery.domain.isLoadingImages;

  return (
    <SectionContainer>
      <NoticesColumn>
        <SectionHeader>
          <DecorativeTitle variant="h2">
            LATEST NOTICES
          </DecorativeTitle>
          <ViewAllLink 
            component={Link}
            to="/notices" 
            variant="body2" 
          >
            View All
          </ViewAllLink>
        </SectionHeader>

        {noticesLoading && <CircularProgress size={24} />}
        {noticesError && <Alert severity="error">{noticesError}</Alert>}
        
        {!noticesLoading && !noticesError && noticesData.length === 0 && (
          <EmptyStateText variant="body1" color="text.secondary">
            No recent notices.
          </EmptyStateText>
        )}

        {noticesData.map((notice, index) => {
          
          return (
            <NoticeLinkWrapper key={notice.slug} to={`/notices/${notice.slug}`}>
              <NoticeItemCard>
                <DateBox>
                  <NoticeDayText variant="h2">
                    {formatDay(notice.publishedAt)}
                  </NoticeDayText>
                  <NoticeMonthText variant="caption">
                    {formatMonth(notice.publishedAt)}
                  </NoticeMonthText>
                </DateBox>
                <NoticeContentColumn>
                  <NoticeTitleRow>
                    <NoticeTitleText variant="h3">
                      {notice.title}
                    </NoticeTitleText>
                    <NoticeBadgesWrapper>
                      {index === 0 && <NewBadge sx={{ m: 0 }}>NEW</NewBadge>}
                      {notice.category && (
                        <NoticeCategoryBadge category={notice.category} />
                      )}
                    </NoticeBadgesWrapper>
                  </NoticeTitleRow>
                  
                  <NoticeMetaRow>
                    <NoticeMetaItem>
                      <CalendarTodayIcon />
                      <NoticeMetaText variant="caption">
                        {formatFullDate(notice.publishedAt)}
                      </NoticeMetaText>
                    </NoticeMetaItem>
                    <NoticeMetaDivider variant="caption">|</NoticeMetaDivider>
                    <NoticeMetaItem>
                      <AccessTimeIcon />
                      <NoticeMetaText variant="caption">
                        {formatTime(notice.publishedAt)}
                      </NoticeMetaText>
                    </NoticeMetaItem>
                  </NoticeMetaRow>
                </NoticeContentColumn>
              </NoticeItemCard>
            </NoticeLinkWrapper>
          );
        })}
      </NoticesColumn>

      <GalleryColumn>
        <SectionHeader>
          <DecorativeTitle variant="h2">
            GALLERY HIGHLIGHTS
          </DecorativeTitle>
          <ViewAllLink 
            component={Link}
            to="/gallery" 
            variant="body2" 
          >
            View All
          </ViewAllLink>
        </SectionHeader>

        {isLoadingGallery && <CircularProgress size={24} sx={{ display: 'block', m: 'auto' }} />}
        {!isLoadingGallery && highlights.length === 0 && (
          <EmptyStateText variant="body1" color="text.secondary">
            No gallery highlights available.
          </EmptyStateText>
        )}
        {!isLoadingGallery && highlights.length > 0 && (
          <GalleryGrid>
            {highlights.map((image, index) => (
              <GalleryImageWrapper key={image._id || index}>
                <img src={image.imageUrl} alt={image.caption || `Gallery Highlight ${index + 1}`} loading="lazy" />
              </GalleryImageWrapper>
            ))}
          </GalleryGrid>
        )}
      </GalleryColumn>
    </SectionContainer>
  );
});
