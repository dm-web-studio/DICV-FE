import { observer } from 'mobx-react-lite';
import {
  Typography,
  Button,
  Box,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import { useAdminContactStore } from '../store/AdminContactStoreContext';
import { StatusChip } from './ContactTableColumns';
import {
  StyledViewDialog,
  ModalHeaderContainer,
  HeaderIconBox,
  HeaderContentWrapper,
  HeaderTopRow,
  SubjectTitle,
  CloseModalButton,
  HeaderBottomRow,
  SubjectBadge,
  BadgesRow,
  DateTimeContainer,
  DateText,
  TimeText,
  ModalContentContainer,
  MetadataCard,
  MetadataItem,
  MetadataIconAvatar,
  MetadataTextContainer,
  MetadataDivider,
  InfoLabel,
  InfoValue,
  MessageSectionHeader,
  MessageSectionTitle,
  MessageBubble,
  MessageText,
  ModalFooterContainer,
  ModalActionButtons
} from './ContactViewModal.styles';

export const ContactViewModal = observer(function ContactViewModal() {
  const { ui, domain } = useAdminContactStore();

  return (
    <StyledViewDialog
      open={ui.isViewDialogOpen}
      onClose={() => ui.closeViewDialog()}
      maxWidth="md"
      fullWidth
    >
      {ui.contactToView && (
        <>
          <ModalHeaderContainer>
            <HeaderIconBox>
              <EmailOutlinedIcon />
            </HeaderIconBox>

            <HeaderContentWrapper>
              <HeaderTopRow>
                <SubjectTitle>
                  {ui.contactToView.subject} from {ui.contactToView.name}
                </SubjectTitle>
                <CloseModalButton onClick={() => ui.closeViewDialog()} size="small">
                  <CloseIcon fontSize="small" />
                </CloseModalButton>
              </HeaderTopRow>

              <HeaderBottomRow>
                <BadgesRow>
                  <SubjectBadge
                    label={ui.contactToView.subject.charAt(0).toUpperCase() + ui.contactToView.subject.slice(1).toLowerCase()}
                    size="small"
                  />
                  <StatusChip status={ui.contactToView.status} />
                </BadgesRow>

                <DateTimeContainer>
                  <DateText>{new Date(ui.contactToView.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</DateText>
                  <Typography variant="body2" color="text.secondary">•</Typography>
                  <TimeText>{new Date(ui.contactToView.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</TimeText>
                </DateTimeContainer>
              </HeaderBottomRow>
            </HeaderContentWrapper>
          </ModalHeaderContainer>

          <Divider />

          <ModalContentContainer>
            <MetadataCard>
              <MetadataItem>
                <MetadataIconAvatar>
                  <PersonOutlineOutlinedIcon />
                </MetadataIconAvatar>
                <MetadataTextContainer>
                  <InfoLabel>Sender Name</InfoLabel>
                  <InfoValue>{ui.contactToView.name}</InfoValue>
                </MetadataTextContainer>
              </MetadataItem>

              <MetadataDivider />

              <MetadataItem>
                <MetadataIconAvatar>
                  <PhoneOutlinedIcon />
                </MetadataIconAvatar>
                <MetadataTextContainer>
                  <InfoLabel>{ui.contactToView.phone ? 'Phone Number' : 'Email Address'}</InfoLabel>
                  <InfoValue>{ui.contactToView.phone || ui.contactToView.email}</InfoValue>
                </MetadataTextContainer>
              </MetadataItem>
            </MetadataCard>

            <Box>
              <MessageSectionHeader>
                <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                <MessageSectionTitle>Message</MessageSectionTitle>
              </MessageSectionHeader>
              <MessageBubble>
                <MessageText>{ui.contactToView.message}</MessageText>
              </MessageBubble>
            </Box>
          </ModalContentContainer>

          <Divider />

          <ModalFooterContainer>
            <ModalActionButtons>
              {ui.contactToView.status !== 'unread' && (
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<EmailOutlinedIcon />}
                  onClick={async () => {
                    const success = await domain.updateContactStatus(ui.contactToView!._id, 'unread');
                    if (success) ui.closeViewDialog();
                  }}
                >
                  Mark as Unread
                </Button>
              )}
              {ui.contactToView.status !== 'read' && (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<EmailOutlinedIcon />}
                  onClick={async () => {
                    const success = await domain.updateContactStatus(ui.contactToView!._id, 'read');
                    if (success) ui.closeViewDialog();
                  }}
                >
                  Mark as Read
                </Button>
              )}
            </ModalActionButtons>
            <Button
              onClick={() => ui.closeViewDialog()}
              variant="outlined"
              color="inherit"
              startIcon={<CloseIcon />}
            >
              Close
            </Button>
          </ModalFooterContainer>
        </>
      )}
    </StyledViewDialog>
  );
});
