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
  NoticeCategoryBadge,
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

import { useTheme } from '@mui/material/styles';
import { badgeCategoryMapping } from '../../notices/store/NoticeUIStore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import img1 from '../../../assets/home-hero.png';
import img2 from '../../../assets/about-hero.png';
import img3 from '../../../assets/admission-hero.png';
import img4 from '../../../assets/notice-hero-bg.png';

export const HomeNoticesGallerySection = observer(function HomeNoticesGallerySection() {

  const { notices, domain } = useHomeStore();
  const theme = useTheme();
  
  const noticesData = domain.latestNotices;
  const { isLoading: noticesLoading, error: noticesError } = notices.domain;

  const galleryImages = [img1, img2, img3, img4];

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
          const badgeType = notice.category ? badgeCategoryMapping[notice.category.toLowerCase()] || 'grey' : 'grey';
          const colorConfig = theme.badgeColors?.[badgeType] || theme.badgeColors?.grey || { bg: '#F5F5F5', text: '#616161' };
          
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
                        <NoticeCategoryBadge colorConfig={colorConfig} sx={{ m: 0 }}>
                          {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                        </NoticeCategoryBadge>
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

        <GalleryGrid>
          {galleryImages.map((src, index) => (
            <GalleryImageWrapper key={index}>
              <img src={src} alt={`Gallery Highlight ${index + 1}`} loading="lazy" />
            </GalleryImageWrapper>
          ))}
        </GalleryGrid>
      </GalleryColumn>
    </SectionContainer>
  );
});
