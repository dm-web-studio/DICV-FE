import { observer } from 'mobx-react-lite';
import { useTheme } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNoticeStore } from '../store/NoticeStoreContext';
import type { ParsedNotice } from '../types';
import { badgeCategoryMapping } from '../store/NoticeUIStore';
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
  Badge,
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
  const theme = useTheme();
  const isSelected = ui.selectedNoticeSlug === notice.slug;

  const handleClick = () => {
    ui.setSelectedNotice(isSelected ? null : notice.slug);
  };

  const badgeType = notice.category ? badgeCategoryMapping[notice.category.toLowerCase()] || 'grey' : 'grey';
  const colorConfig = theme.badgeColors?.[badgeType] || theme.badgeColors?.grey || { bg: 'transparent', text: 'inherit' };

  return (
    <CardContainer isSelected={isSelected}>
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
            <Badge colorConfig={colorConfig}>
              {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
            </Badge>
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

