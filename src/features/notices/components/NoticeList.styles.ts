import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import '../../../app/theme/theme'; // Import augmentation

export const ContainerCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: (theme.shape.borderRadius as number) * 2,
  padding: theme.spacing(4, 6),
  boxShadow: theme.shadows[1],
}));

export const ListContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const HeaderRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

export const PaginationWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(4),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const ListTitleIcon = styled(CalendarMonthIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const ListTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  position: 'relative',
  textTransform: 'uppercase',
  fontWeight: 700,
  paddingBottom: theme.spacing(2),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -1,
    left: 0,
    width: 40,
    height: 2,
    backgroundColor: theme.palette.secondary.main,
  }
}));

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(8),
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));
