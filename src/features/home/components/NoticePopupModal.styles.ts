import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.spacing(4),
    padding: 0,
    maxWidth: 650,
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100% - 64px)',
  },
}));

export const ModalHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4, 5),
  borderBottom: `1px solid ${theme.palette.divider}`,
  position: 'relative',
}));

export const BellIconWrapper = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  marginRight: theme.spacing(3),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 4,
    right: 4,
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: theme.palette.error.main,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

export const HeaderTextContainer = styled(Box)({
  flexGrow: 1,
});

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 18,
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  letterSpacing: 0.5,
}));

export const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 12,
  marginTop: theme.spacing(0.5),
}));

export const CategoryBadge = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}15`,
  color: theme.palette.primary.main,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  fontSize: 12,
  textTransform: 'uppercase',
  marginRight: theme.spacing(10), // space for absolute close button
}));

export const CloseButton = styled(IconButton)({
  position: 'absolute',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)',
});

export const NoticeHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
}));

export const ModalContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  overflowY: 'auto',
  flex: 1,
}));

export const NoticeTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

export const NoticeMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  color: theme.palette.text.secondary,
  fontSize: 14,
  flexShrink: 0,
  '& svg': {
    fontSize: 16,
    marginRight: theme.spacing(1),
    verticalAlign: 'text-bottom',
  },
}));

export const NoticeImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.spacing(2),
  objectFit: 'contain',
  display: 'block',
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: theme.palette.background.default,
  borderRadius: `${theme.shape.borderRadius}px !important`,
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    padding: theme.spacing(0, 3),
    minHeight: 48,
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  '& .MuiAccordionDetails-root': {
    padding: theme.spacing(0, 3, 3),
    color: theme.palette.text.primary,
    fontSize: 14,
    lineHeight: 1.6,
  },
}));

export const BodyContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 14,
  lineHeight: 1.6,
}));

export const ModalFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(3, 5),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
}));

export const ViewButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  borderRadius: theme.spacing(1),
  fontWeight: 600,
  textTransform: 'none',
}));
