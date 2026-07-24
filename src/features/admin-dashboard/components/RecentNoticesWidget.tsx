import { Button, List, ListItemAvatar, Typography } from '@mui/material';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import { useNavigate } from 'react-router-dom';
import { formatRelativeTime } from '../../../shared/utils/dateUtils';
import type { Notice } from '../../../shared/api/apiTypes';
import { ListCard, ListHeader, ListTitle } from './DashboardAdminPage.styles';

interface RecentNoticesWidgetProps {
  notices: Notice[];
}

import { useTheme } from '@mui/material/styles';
import { EmptyStateContainer, PrimaryText, StyledListItem, StyledAvatar, StyledListItemText } from './RecentNoticesWidget.styles';

export const RecentNoticesWidget: React.FC<RecentNoticesWidgetProps> = ({ notices }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <ListCard>
      <ListHeader>
        <ListTitle>Recent Notices</ListTitle>
        <Button variant="text" size="small" onClick={() => navigate('/admin/notices')}>
          View All
        </Button>
      </ListHeader>
      
      {notices.length === 0 ? (
        <EmptyStateContainer>
          <Typography variant="body2">No notices found.</Typography>
        </EmptyStateContainer>
      ) : (
        <List disablePadding>
          {notices.map((notice, index) => (
            <StyledListItem 
              key={notice._id || index} 
              disablePadding 
              divider={index < notices.length - 1}
              secondaryAction={
                <Typography variant="caption" color="text.secondary">
                  {formatRelativeTime(notice.publishedAt)}
                </Typography>
              }
            >
              <ListItemAvatar>
                <StyledAvatar 
                  bgColor={theme.badgeColors.green.bg}
                  textColor={theme.badgeColors.green.text}
                >
                  <CampaignOutlinedIcon fontSize="small" />
                </StyledAvatar>
              </ListItemAvatar>
              <StyledListItemText
                primary={
                  <PrimaryText variant="body1">
                    {notice.title}
                  </PrimaryText>
                }
                secondary={
                  <Typography variant="caption" color="text.secondary" noWrap>
                    {notice.category.toUpperCase()}
                  </Typography>
                }
              />
            </StyledListItem>
          ))}
        </List>
      )}
    </ListCard>
  );
};
