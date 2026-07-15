import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const EmptyStateContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: 16,
  border: `1px dashed ${theme.palette.divider}`,
  minHeight: 400, // Provides a good minimum height
  width: '100%',
  textAlign: 'center',
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 64,
  height: 64,
  borderRadius: '50%',
  backgroundColor: theme.palette.action.hover,
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
  '& svg': {
    fontSize: 32,
  },
}));

export const EmptyStateTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
}));

export const EmptyStateSubtext = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));
