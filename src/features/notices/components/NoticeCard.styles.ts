import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import '../../../app/theme/theme'; // Import augmentation

export const CardContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: (theme.shape.borderRadius as number) * 2,
  marginBottom: theme.spacing(3),
  overflow: 'hidden',
  transition: 'all 0.2s ease-in-out',
  boxShadow: isSelected ? theme.shadows[3] : 'none',
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
}));

export const HeaderArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(3),
  cursor: 'pointer',
  gap: theme.spacing(3),
  alignItems: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
  },
}));

export const DateBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 60,
  height: 60,
  backgroundColor: theme.palette.grey[50],
  borderRadius: (theme.shape.borderRadius as number) * 2,
}));

export const DayText = styled(Typography)(() => ({
  lineHeight: 1,
  fontSize: 18,
  fontWeight: 700,
}));

export const MonthText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginTop: theme.spacing(0.5),
  fontSize: 12,
}));

export const ContentBox = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignSelf: 'stretch',
  minWidth: 0,
});

export const TitleRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  gap: theme.spacing(2),
  flexWrap: 'wrap',
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.3,
  wordBreak: 'break-word',
  fontSize: 16,
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

export const MetaRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: 'auto',
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
  },
}));

export const MetaItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const MetaText = styled(Typography)(() => ({
  fontSize: 12,
  fontWeight: 400,
}));

export const MetaDivider = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
}));

export const CalendarIcon = styled(CalendarTodayIcon)(() => ({
  fontSize: 14,
}));

export const TimeIcon = styled(AccessTimeIcon)(() => ({
  fontSize: 14,
}));

export const NewBadge = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: theme.palette.common.white,
  padding: theme.spacing(0.25, 1.25),
  borderRadius: theme.shape.borderRadius,
  fontSize: 10,
  fontWeight: 700,
  lineHeight: 1.5,
  display: 'inline-flex',
  alignItems: 'center',
}));

export const RightColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
  },
}));


export const ExpandButton = styled(IconButton)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.divider,
  borderRadius: theme.shape.borderRadius,
}));

export const ExpandedContentArea = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 3, 3, 3), 
  paddingLeft: 72,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(3),
  },
}));

export const ContentInner = styled(Box)(({ theme }) => ({
  borderLeft: `3px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.grey[100],
  borderTopRightRadius: (theme.shape.borderRadius as number) * 2,
  borderBottomRightRadius: (theme.shape.borderRadius as number) * 2,
  borderBottomLeftRadius: (theme.shape.borderRadius as number) * 2,
  padding: theme.spacing(3, 4),
  color: theme.palette.text.primary,
  fontSize: 14,
  lineHeight: 1.6,
  '& p': {
    marginBottom: theme.spacing(2),
  },
  '& p:last-child': {
    marginBottom: 0,
  },
}));

export const BodyText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'preserveBreaks',
})<{ preserveBreaks?: boolean }>(({ preserveBreaks }) => ({
  fontSize: 14,
  whiteSpace: preserveBreaks ? 'pre-wrap' : 'normal',
}));
