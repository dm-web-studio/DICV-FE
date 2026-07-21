import { observer } from 'mobx-react-lite';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { confirmDialogStore } from '../../stores/ConfirmDialogStore';
import { TitleContainer } from './ConfirmDialog.styles';

const VARIANT_ICON_MAP = {
  info: { icon: InfoOutlinedIcon, color: 'info' as const },
  warning: { icon: WarningAmberOutlinedIcon, color: 'warning' as const },
  error: { icon: ErrorOutlineOutlinedIcon, color: 'error' as const },
};

export const ConfirmDialog = observer(function ConfirmDialog() {
  const { isOpen, isProcessing, options } = confirmDialogStore;

  if (!options) return null;

  const { icon: Icon, color } = VARIANT_ICON_MAP[options.variant ?? 'info'];

  return (
    <Dialog 
      open={isOpen} 
      onClose={isProcessing ? undefined : () => confirmDialogStore.cancel()}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>
        <TitleContainer>
          <Icon color={color} />
          {options.title}
        </TitleContainer>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{options.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => confirmDialogStore.cancel()} disabled={isProcessing}>
          {options.cancelLabel}
        </Button>
        <Button
          color={options.variant === 'error' ? 'error' : 'primary'}
          onClick={() => confirmDialogStore.confirm()}
          disabled={isProcessing}
          variant="contained"
        >
          {isProcessing ? <CircularProgress size={16} color="inherit" /> : options.confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
});
