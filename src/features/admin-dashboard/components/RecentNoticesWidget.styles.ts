import { Box, Typography, ListItem, Avatar, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EmptyStateContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  color: theme.palette.text.secondary,
}));

export const PrimaryText = styled(Typography)({
  fontWeight: 500,
});

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  transition: 'all 0.2s ease',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    transform: 'translateX(4px)',
  }
}));

export const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'bgColor' && prop !== 'textColor'
})<{ bgColor: string; textColor: string }>(({ bgColor, textColor }) => ({
  backgroundColor: bgColor,
  color: textColor,
  width: 40,
  height: 40,
}));

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  paddingRight: theme.spacing(8),
}));
