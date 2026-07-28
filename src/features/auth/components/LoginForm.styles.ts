import { styled, alpha } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

export const FormContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '100%',
  maxWidth: 440,
  padding: theme.spacing(5),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  boxShadow: '0px 12px 24px -4px rgba(0,0,0,0.05), 0px 4px 6px -2px rgba(0,0,0,0.03)',
  border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

export const LogoCircle = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: 32,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5),
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  fontSize: 14,
  fontWeight: 600,
  marginTop: theme.spacing(1),
  borderRadius: theme.spacing(1),
}));

export const ForgotPasswordWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  marginTop: theme.spacing(-1),
  marginBottom: theme.spacing(1),
}));

export const CenteredLinkWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: 'center',
}));
