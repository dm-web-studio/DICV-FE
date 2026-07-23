import { styled } from '@mui/material/styles';
import { DialogTitle, DialogContent, DialogActions, Stack } from '@mui/material';

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  backgroundColor: theme.badgeColors.blue.bg,
  color: theme.badgeColors.blue.text,
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export const DialogFormStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4),
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.badgeColors.blue.bg,
}));
