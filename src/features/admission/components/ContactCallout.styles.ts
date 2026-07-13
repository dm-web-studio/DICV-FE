import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MessageIcon from '@mui/icons-material/MessageOutlined';

export const CalloutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark, // Dark banner
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export const TextSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
}));

export const StyledMessageIcon = styled(MessageIcon)(({ theme }) => ({
  fontSize: 40,
  color: theme.palette.secondary.main,
}));

export const CalloutTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.contrastText,
}));

export const CalloutSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
}));
