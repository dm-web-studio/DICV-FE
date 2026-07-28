import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.badgeColors.blue.bg,
}));

export const DrawerTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 18,
  color: theme.badgeColors.blue.text,
}));

export const SectionHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 16,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export const SectionContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const DrawerFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
}));
