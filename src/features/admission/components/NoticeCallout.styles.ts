import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export const CalloutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.badgeColors.blue.bg,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4, 6),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(6),
  position: 'relative',
  overflow: 'hidden',
}));

export const IconCircle = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  zIndex: 1,
}));

export const WatermarkWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(6),
  bottom: theme.spacing(-2),
  opacity: 0.08,
  color: theme.palette.primary.main,
  pointerEvents: 'none',
  display: 'none',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const CalloutTextWrapper = styled(Box)(() => ({
  flex: 1,
  zIndex: 1,
}));

export const CalloutIconText = styled(Typography)(() => ({
  fontSize: 24,
  fontWeight: 'bold',
  fontFamily: 'serif',
}));

export const CalloutText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

export const StyledSchoolIcon = styled(SchoolIcon)(({ theme }) => ({
  fontSize: 56,
  marginBottom: theme.spacing(-2.5),
  zIndex: 1,
}));

export const StyledMenuBookIcon = styled(MenuBookIcon)(() => ({
  fontSize: 56,
}));
