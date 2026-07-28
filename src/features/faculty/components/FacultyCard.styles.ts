import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(6), // 24px
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '16px',
  boxShadow: theme.shadows[2],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

export const PhotoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(4),
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 140,
  height: 140,
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[3],
  border: `4px solid ${theme.palette.background.paper}`,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const NameTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  textAlign: 'center',
  marginBottom: theme.spacing(0.5),
}));

export const DesignationTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

export const GoldUnderline = styled(Box)(({ theme }) => ({
  width: 40,
  height: 2,
  backgroundColor: theme.palette.secondary.main,
  margin: '0 auto',
  marginBottom: theme.spacing(4),
}));

export const InfoRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '&:last-child': {
    marginBottom: 0,
  },
  '& > svg': {
    color: theme.palette.primary.main,
    fontSize: 20,
  },
}));

export const InfoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
