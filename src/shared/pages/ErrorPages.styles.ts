import { styled, alpha } from '@mui/material/styles';
import { Box, Typography, Button, type ButtonProps } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3),
  textAlign: 'center',
}));

export const ContentCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  maxWidth: 480,
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  boxShadow: '0px 12px 24px -4px rgba(0,0,0,0.05), 0px 4px 6px -2px rgba(0,0,0,0.03)',
  border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
}));

export const IconWrapper = styled(Box)<{ isError?: boolean }>(({ theme, isError }) => ({
  color: isError ? theme.palette.error.main : theme.palette.primary.main,
  '& svg': {
    fontSize: 64,
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  marginBottom: theme.spacing(1),
}));

export const StyledActionButton = styled(Button)<ButtonProps & { component?: any; to?: string }>(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontWeight: 600,
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(2),
}));
