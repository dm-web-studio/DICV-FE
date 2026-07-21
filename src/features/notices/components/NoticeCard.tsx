import { observer } from 'mobx-react-lite';

import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNoticeStore } from '../store/NoticeStoreContext';
import type { ParsedNotice } from '../types';
import { NoticeCategoryBadge } from '../../../shared/components/NoticeCategoryBadge';
import {
  CardContainer,
  HeaderArea,
  DateBox,
  DayText,
  MonthText,
  ContentBox,
  TitleRow,
  TitleText,
  MetaRow,
  MetaItem,
  MetaText,
  MetaDivider,
  CalendarIcon,
  TimeIcon,
  NewBadge,
  RightColumn,
  ExpandButton,
  ExpandedContentArea,
  ContentInner,
  BodyText
} from './NoticeCard.styles';

interface NoticeCardProps {
  notice: ParsedNotice;
  isLatest?: boolean;
}

const stripHtml = (html: string) => {
  return html.replace(/<[^>]*>?/gm, '');
};

export const NoticeCard = observer(function NoticeCard({ notice, isLatest }: NoticeCardProps) {
  const { ui } = useNoticeStore();
  const isSelected = ui.selectedNoticeSlug === notice.slug;

  const handleClick = () => {
    ui.setSelectedNotice(isSelected ? null : notice.slug);
  };

  return (
    <CardContainer id={`notice-item-${notice.slug}`} isSelected={isSelected}>
      <HeaderArea onClick={handleClick}>
        <DateBox>
          <DayText color="primary">{notice.displayDay}</DayText>
          <MonthText color="primary">{notice.displayMonth}</MonthText>
        </DateBox>
        
        <ContentBox>
          <TitleRow>
            {isLatest && <NewBadge>NEW</NewBadge>}
            <TitleText>
              {notice.title}
            </TitleText>
          </TitleRow>
          
          <MetaRow>
            <MetaItem>
              <CalendarIcon color="action" />
              <MetaText color="text.secondary">{notice.displayFullDate}</MetaText>
            </MetaItem>
            <MetaDivider color="text.secondary">|</MetaDivider>
            <MetaItem>
              <TimeIcon color="action" />
              <MetaText color="text.secondary">{notice.displayTime}</MetaText>
            </MetaItem>
          </MetaRow>
        </ContentBox>

        <RightColumn>
          {notice.category && (
            <NoticeCategoryBadge category={notice.category} />
          )}
          
          <ExpandButton size="small">
            {isSelected ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </ExpandButton>
        </RightColumn>
      </HeaderArea>

      <Collapse in={isSelected} timeout="auto" unmountOnExit>
        <ExpandedContentArea>
          <ContentInner>
            {notice.body ? (
              <BodyText preserveBreaks>
                {stripHtml(notice.body)}
              </BodyText>
            ) : (
              <BodyText>
                {notice.excerpt || 'No additional details provided.'}
              </BodyText>
            )}
          </ContentInner>
        </ExpandedContentArea>
      </Collapse>
    </CardContainer>
  );
});

