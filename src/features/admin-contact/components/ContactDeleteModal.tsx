import { observer } from 'mobx-react-lite';
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import { useAdminContactStore } from '../store/AdminContactStoreContext';

export const ContactDeleteModal = observer(function ContactDeleteModal() {
  const { ui, domain } = useAdminContactStore();

  const handleDeleteConfirm = async () => {
    if (ui.contactToDelete) {
      const success = await domain.deleteContact(ui.contactToDelete._id);
      if (success) {
        ui.closeDeleteDialog();
      }
    }
  };

  return (
    <Dialog
      open={ui.isDeleteDialogOpen}
      onClose={() => ui.closeDeleteDialog()}
    >
      <DialogTitle>Delete Contact Submission</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this contact submission from {ui.contactToDelete?.name}?
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => ui.closeDeleteDialog()} color="inherit">
          Cancel
        </Button>
        <Button
          onClick={handleDeleteConfirm}
          color="error"
          variant="contained"
          disabled={domain.isDeleting}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
});
