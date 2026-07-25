import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useHomeStore } from '../store/HomeStoreContext';
import {
  StyledDialog,
  ModalHeader,
  BellIconWrapper,
  HeaderTextContainer,
  HeaderTitle,
  HeaderSubtitle,
  CategoryBadge,
  ModalContent,
  NoticeTitle,
  NoticeMeta,
  NoticeImage,
  StyledAccordion,
  BodyContent,
  ModalFooter,
  ViewButton,
  CloseButton,
  NoticeHeader,
  StyledFormControlLabel
} from './NoticePopupModal.styles';

export const NoticePopupModal = observer(function NoticePopupModal() {
  const { domain } = useHomeStore();
  const navigate = useNavigate();
  const [dontShowAgain, setDontShowAgain] = useState(false);

  if (!domain.popupNotice) return null;
  const notice = domain.popupNotice;

  const handleClose = () => {
    if (dontShowAgain) {
      sessionStorage.setItem(`dismissedNoticePopups_${notice.slug}`, 'true');
    }
    domain.setNoticePopupOpen(false);
  };

  const handleView = () => {
    handleClose();
    navigate(`/notices/${notice.slug}`);
  };

  const hasImage = !!notice.imageUrl;

  return (
    <StyledDialog open={domain.isNoticePopupOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <ModalHeader>
        <BellIconWrapper>
          <NotificationsActiveOutlinedIcon />
        </BellIconWrapper>
        <HeaderTextContainer>
          <HeaderTitle>NOTICE</HeaderTitle>
          <HeaderSubtitle>Stay updated with important announcements</HeaderSubtitle>
        </HeaderTextContainer>
        <CategoryBadge>{notice.category}</CategoryBadge>
        <CloseButton onClick={handleClose} size="small">
          <CloseIcon />
        </CloseButton>
      </ModalHeader>

      <ModalContent>
        <NoticeHeader>
          <NoticeTitle variant="h1">{notice.title}</NoticeTitle>
          <NoticeMeta>
            <span>
              <EventOutlinedIcon />
              {new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(notice.publishedAt))}
            </span>
          </NoticeMeta>
        </NoticeHeader>

        {hasImage && <NoticeImage src={notice.imageUrl} alt={notice.title} />}

        {hasImage ? (
          <StyledAccordion disableGutters defaultExpanded={false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Read full notice
            </AccordionSummary>
            <AccordionDetails>
              <BodyContent>{notice.body}</BodyContent>
            </AccordionDetails>
          </StyledAccordion>
        ) : (
          <BodyContent>{notice.body}</BodyContent>
        )}
      </ModalContent>

      <ModalFooter>
        <StyledFormControlLabel
          control={
            <Checkbox 
              size="small" 
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
            />
          }
          label="Don't show again"
        />
        <ViewButton 
          variant="contained" 
          color="primary" 
          endIcon={<ArrowForwardIcon />}
          onClick={handleView}
          disableElevation
        >
          View Notice
        </ViewButton>
      </ModalFooter>
    </StyledDialog>
  );
});
