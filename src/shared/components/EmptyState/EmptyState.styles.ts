import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const EmptyStateContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.shape.borderRadius,
  border: `1px dashed ${theme.palette.divider}`,
  textAlign: 'center',
  width: '100%',
  '& svg': {
    fontSize: 48,
    color: theme.palette.action.disabled,
    marginBottom: theme.spacing(2),
  }
}));

export const EmptyStateTitle = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
}));

export const EmptyStateDescription = styled(Typography)(({ theme }) => ({
  fontSize: '13px',
  color: theme.palette.text.secondary,
}));
