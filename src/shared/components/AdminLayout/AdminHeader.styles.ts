import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 4),
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  zIndex: theme.zIndex.appBar,
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 20,
  color: theme.palette.text.primary,
  marginBottom: 0,
}));

export const TitleGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.light,
  opacity: 0.8,
  
  '& svg': {
    fontSize: 28,
    color: theme.palette.primary.main,
  }
}));

export const HeaderActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));
