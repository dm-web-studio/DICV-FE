import { styled } from '@mui/material/styles';
import { Box, Paper, Stack, Typography } from '@mui/material';

export const ListPanelContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
}));

export const ListHeader = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ListScrollArea = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const AlbumCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected?: boolean }>(({ theme, selected }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(3),
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  backgroundColor: selected ? theme.badgeColors.blue.bg : theme.palette.background.paper,
  border: selected ? `1px solid ${theme.badgeColors.blue.text}` : '1px solid transparent',
  '&:hover': {
    backgroundColor: selected ? theme.badgeColors.blue.bg : theme.palette.action.hover,
  },
}));

export const Thumbnail = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const AlbumNameText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected?: boolean }>(({ theme, selected }) => ({
  color: selected ? theme.badgeColors.blue.text : 'inherit',
}));

export const EmptyStateText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export const ListFooterText = styled(Typography)({
  textAlign: 'center',
});
