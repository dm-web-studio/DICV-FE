import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const HeaderContainer = styled('header')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const AnnouncementBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1, 4),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(4),
  minHeight: 40,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export const AnnouncementText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const ApplyButton = styled(Button)(({ theme }) => ({
  borderRadius: typeof theme.shape.borderRadius === 'number' ? theme.shape.borderRadius * 4 : 16,
  padding: theme.spacing(1, 3),
  fontWeight: theme.typography.fontWeightBold,
}));
