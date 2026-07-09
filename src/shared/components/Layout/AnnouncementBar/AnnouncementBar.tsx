import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CampaignIcon from '@mui/icons-material/Campaign';
import { announcementBarStore } from '../../../stores/AnnouncementBarStore';
import type { Notice } from '../../../../features/notices/types';
import {
  BarContainer,
  SingleNoticeWrapper,
  MarqueeWrapper,
  MarqueeTrack,
  NoticeLink,
  CloseButtonContainer,
} from './AnnouncementBar.styles';

export const AnnouncementBar = observer(function AnnouncementBar() {
  const { pinnedNotices, isDismissed } = announcementBarStore;

  useEffect(() => {
    void announcementBarStore.fetchPinnedNotices();
  }, []);

  if (pinnedNotices.length === 0 || isDismissed) {
    return null;
  }

  const handleDismiss = () => {
    announcementBarStore.dismiss();
  };

  const hasMultiple = pinnedNotices.length > 1;

  // Render a list of notices with a hidden pseudo-duplicate list at the end for the marquee effect.
  // We duplicate it 4 times so even on ultrawide screens with short text, the track doesn't empty out
  // before the animation loops (transform: translateX(-50%) shifts exactly half the total width).
  const renderNotices = () => {
    return pinnedNotices.map((notice: Notice, idx: number) => (
      <NoticeLink key={`${notice.slug}-${idx}`} to={`/notices/${notice.slug}`}>
        <CampaignIcon color="secondary" fontSize="inherit" sx={{ mr: 0.5, opacity: 0.8 }} />
        {notice.title}
      </NoticeLink>
    ));
  };

  const firstNotice = pinnedNotices[0];

  return (
    <BarContainer role="region" aria-label="School announcements">
      {!hasMultiple && firstNotice ? (
        <SingleNoticeWrapper>
          <NoticeLink to={`/notices/${firstNotice.slug}`}>
            <CampaignIcon color="secondary" fontSize="inherit" sx={{ mr: 0.5, opacity: 0.8 }} />
            {firstNotice.title}
          </NoticeLink>
        </SingleNoticeWrapper>
      ) : (
        <MarqueeWrapper>
          <MarqueeTrack>
            <Box sx={{ display: 'flex', flexShrink: 0 }}>
              {renderNotices()}
              {renderNotices()}
            </Box>
            <Box aria-hidden="true" sx={{ display: 'flex', flexShrink: 0 }}>
              {renderNotices()}
              {renderNotices()}
            </Box>
          </MarqueeTrack>
        </MarqueeWrapper>
      )}

      <CloseButtonContainer>
        <IconButton 
          size="small" 
          color="inherit" 
          onClick={handleDismiss}
          aria-label="dismiss announcements"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </CloseButtonContainer>
    </BarContainer>
  );
});
