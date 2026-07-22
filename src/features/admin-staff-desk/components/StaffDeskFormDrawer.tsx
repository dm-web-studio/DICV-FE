import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import CircularProgress from '@mui/material/CircularProgress';
import { ImageUpload } from '../../../shared/components/ImageUpload';
import { AdminDrawer } from '../../../shared/components/AdminDrawer/AdminDrawer';
import { CharCountTextArea } from '../../../shared/components/CharCountTextArea/CharCountTextArea';
import { useStaffDeskAdminStore } from '../store/StaffDeskAdminStoreContext';
import { DrawerContent } from './StaffDeskFormDrawer.styles';

export const StaffDeskFormDrawer = observer(function StaffDeskFormDrawer() {
  const { ui, domain } = useStaffDeskAdminStore();


  const handlePhotoChange = (file: File | null, previewUrl: string | null) => {
    ui.setDraftPhoto(file, previewUrl);
  };

  const handleRemovePhoto = () => {
    ui.setDraftPhoto(null, null);
  };

  const handleSignatureChange = (file: File | null, previewUrl: string | null) => {
    ui.setDraftSignature(file, previewUrl);
  };

  const handleRemoveSignature = () => {
    ui.setDraftSignature(null, null);
  };

  const handleSave = async () => {
    if (!ui.editingDesk) return;
    const formData = ui.getFormData();

    try {
      await domain.updateStaffDesk(ui.editingDesk.type, formData);
    } catch (error) {
      // Error handled by store
    }
  };

  if (!ui.editingDesk) return null;

  return (
    <AdminDrawer
      open={ui.isDrawerOpen}
      onClose={() => !domain.isSubmitting && ui.closeDrawer()}
      title={`Edit ${ui.editingDesk.type.replace('-', ' ')}`}
      footerActions={
        <>
          <Button variant="outlined" onClick={() => ui.closeDrawer()} disabled={domain.isSubmitting}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            disabled={!ui.isFormValid || domain.isSubmitting}
            startIcon={domain.isSubmitting ? <CircularProgress size={20} /> : undefined}
          >
            {domain.isSubmitting ? 'Saving...' : 'Save Changes'}
          </Button>
        </>
      }
    >
      <DrawerContent>
        <ImageUpload
          title="Photo (Required)"
          previewUrl={ui.draftPreviewUrl}
          onFileChange={handlePhotoChange}
          onRemove={handleRemovePhoto}
        />

        <ImageUpload
          title="Signature (Optional)"
          previewUrl={ui.draftSignaturePreviewUrl}
          onFileChange={handleSignatureChange}
          onRemove={handleRemoveSignature}
        />

        <TextField
          label="Name"
          value={ui.draftName}
          onChange={(e) => ui.setDraftField('draftName', e.target.value)}
          required
          fullWidth
        />

        <CharCountTextArea
          label="Message"
          value={ui.draftMessage}
          onChange={(e) => ui.setDraftField('draftMessage', e.target.value)}
          maxChars={1500}
          minRows={6}
          countInfoTooltip="Max 1500 characters (with spaces)"
          required
        />

        {ui.editingDesk.type === 'principal' && (
          <CharCountTextArea
            label="Home Message"
            value={ui.draftHomeMessage}
            onChange={(e) => ui.setDraftField('draftHomeMessage', e.target.value)}
            maxChars={500}
            minRows={4}
            countInfoTooltip="Max 500 characters (with spaces)"
            required
          />
        )}
      </DrawerContent>
    </AdminDrawer>
  );
});
