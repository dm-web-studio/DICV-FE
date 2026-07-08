import { observer } from 'mobx-react-lite';
import Snackbar, { type SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { toastStore } from '../../stores/ToastStore';

export const Toast = observer(function Toast() {
  const handleSnackbarClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') return;
    toastStore.clear();
  };

  const handleAlertClose = (event: React.SyntheticEvent) => {
    handleSnackbarClose(event);
  };

  return (
    <Snackbar
      open={toastStore.message !== null}
      autoHideDuration={6000}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={handleAlertClose}
        severity={toastStore.severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {toastStore.message}
      </Alert>
    </Snackbar>
  );
});
