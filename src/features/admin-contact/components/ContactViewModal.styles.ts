import { styled, alpha } from '@mui/material/styles';
import { Box, Typography, Dialog, IconButton, Chip } from '@mui/material';

export const StyledViewDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.spacing(2),
  },
}));

export const ModalHeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  padding: theme.spacing(4),
  paddingBottom: theme.spacing(3),
}));



export const HeaderIconBox = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: 12,
  backgroundColor: theme.badgeColors?.blue?.bg || alpha(theme.palette.primary.main, 0.1),
  color: theme.badgeColors?.blue?.text || theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(2.5),
  '& svg': {
    fontSize: 32,
  },
}));

export const HeaderContentWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
}));

export const HeaderTopRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const SubjectTitle = styled(Typography)({
  fontSize: 24,
  fontWeight: 600,
  lineHeight: 1.2,
});

export const CloseModalButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(-1),
}));

export const HeaderBottomRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const SubjectBadge = styled(Chip)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.info.main, 0.1),
  color: theme.palette.info.dark,
  fontWeight: 500,
  borderRadius: theme.spacing(1),
}));

export const BadgesRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
}));

export const DateTimeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
}));

export const DateText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const TimeText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

export const ModalContentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 4, 5, 4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));

export const MetadataCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  gap: theme.spacing(3),
}));

export const MetadataItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  flex: 1,
  minWidth: 200,
}));

export const MetadataDivider = styled(Box)(({ theme }) => ({
  width: 1,
  backgroundColor: theme.palette.divider,
  margin: theme.spacing(0, 1),
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

export const MetadataIconAvatar = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: theme.badgeColors?.blue?.bg || alpha(theme.palette.primary.main, 0.1),
  color: theme.badgeColors?.blue?.text || theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const MetadataTextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const InfoLabel = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  fontWeight: 600,
}));

export const InfoValue = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  fontWeight: 600,
}));

export const MessageSectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1.5),
  color: theme.palette.primary.main,
}));

export const MessageSectionTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 600,
  color: theme.palette.text.secondary,
}));

export const MessageBubble = styled(Box)(({ theme }) => ({
  backgroundColor: theme.badgeColors?.blue?.bg ? alpha(theme.badgeColors.blue.bg, 0.3) : alpha(theme.palette.primary.main, 0.03),
  border: `1px solid ${theme.badgeColors?.blue?.bg || alpha(theme.palette.primary.main, 0.1)}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  minHeight: 150,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  whiteSpace: 'pre-wrap',
  lineHeight: 1.6,
}));

export const ModalFooterContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const ModalActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));
