import { Button, List, ListItemAvatar, Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { formatRelativeTime } from '../../../shared/utils/dateUtils';
// import { useNavigate } from 'react-router-dom'; // Will uncomment when contact admin page exists
import type { ContactSubmission } from '../../../shared/api/apiTypes';
import { ListCard, ListHeader, ListTitle } from './DashboardAdminPage.styles';

interface RecentContactsWidgetProps {
  contacts: ContactSubmission[];
}

import { useTheme } from '@mui/material/styles';
import { EmptyStateContainer, PrimaryText, StyledListItem, StyledAvatar, StyledListItemText } from './RecentContactsWidget.styles';

export const RecentContactsWidget: React.FC<RecentContactsWidgetProps> = ({ contacts }) => {
  // const navigate = useNavigate();
  const theme = useTheme();

  return (
    <ListCard>
      <ListHeader>
        <ListTitle>Recent Contacts</ListTitle>
        <Button variant="text" size="small" disabled>
          View All
        </Button>
      </ListHeader>
      
      {contacts.length === 0 ? (
        <EmptyStateContainer>
          <Typography variant="body2">No contact submissions found.</Typography>
        </EmptyStateContainer>
      ) : (
        <List disablePadding>
          {contacts.map((contact, index) => (
            <StyledListItem 
              key={contact._id || index} 
              disablePadding 
              divider={index < contacts.length - 1}
              secondaryAction={
                <Typography variant="caption" color="text.secondary">
                  {formatRelativeTime(contact.createdAt)}
                </Typography>
              }
            >
              <ListItemAvatar>
                <StyledAvatar 
                  bgColor={theme.badgeColors.red.bg}
                  textColor={theme.badgeColors.red.text}
                >
                  <EmailOutlinedIcon fontSize="small" />
                </StyledAvatar>
              </ListItemAvatar>
              <StyledListItemText
                primary={
                  <PrimaryText variant="body1">
                    {contact.name}
                  </PrimaryText>
                }
                secondary={
                  <Typography variant="caption" color="text.secondary" noWrap>
                    {contact.subject}
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
