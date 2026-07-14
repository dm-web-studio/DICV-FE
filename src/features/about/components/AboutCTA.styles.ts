import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';

export const SectionWrapper = styled(Box)({
  width: '100%',
});

export const CTACard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
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

export const StyledIcon = styled(EventAvailableOutlinedIcon)(({ theme }) => ({
  fontSize: 40,
  color: theme.palette.secondary.main,
}));

export const CTATitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
  fontSize: '18px',
}));

export const CTASubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  fontSize: '13.3px',
}));
