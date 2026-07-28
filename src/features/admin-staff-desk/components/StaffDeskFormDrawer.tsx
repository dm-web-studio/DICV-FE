import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import CircularProgress from '@mui/material/CircularProgress';
import { ImageUpload } from '../../../shared/components/ImageUpload';
import { AdminDrawer } from '../../../shared/components/AdminDrawer/AdminDrawer';
import { CharCountTextArea } from '../../../shared/components/CharCountTextArea/CharCountTextArea';
import { useStaffDeskAdminStore } from '../store/StaffDeskAdminStoreContext';
import { 
  DrawerContent
} from './StaffDeskFormDrawer.styles';
import { UploadProgress } from '../../../shared/components/UploadProgress';

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
    const payload = ui.getPayload();
    const photoFile = ui.draftPhotoFile || undefined;
    const signatureFile = ui.draftSignatureFile || undefined;

    try {
      await domain.updateStaffDesk(ui.editingDesk.type, payload, photoFile, signatureFile);
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
        {domain.uploadProgress !== null && (
          <UploadProgress 
            progress={domain.uploadProgress} 
            label="Uploading image(s) to storage bucket..." 
          />
        )}
        {ui.formFieldsConfig.map((field) => {
          if (field.type === 'image') {
            const isPhoto = field.name === 'photo';
            return (
              <ImageUpload
                key={field.name}
                title={field.label}
                previewUrl={isPhoto ? ui.draftPreviewUrl : ui.draftSignaturePreviewUrl}
                onFileChange={isPhoto ? handlePhotoChange : handleSignatureChange}
                onRemove={isPhoto ? handleRemovePhoto : handleRemoveSignature}
              />
            );
          }

          if (field.type === 'text') {
            return (
              <TextField
                key={field.name}
                label={field.label}
                value={ui[field.name as 'draftName' | 'draftMessage' | 'draftHomeMessage']}
                onChange={(e) => ui.setDraftField(field.name as any, e.target.value)}
                required={field.required}
                fullWidth
              />
            );
          }

          return (
            <CharCountTextArea
              key={field.name}
              label={field.label}
              value={ui[field.name as 'draftName' | 'draftMessage' | 'draftHomeMessage']}
              onChange={(e) => ui.setDraftField(field.name as any, e.target.value)}
              maxChars={field.maxChars!}
              {...(field.minRows !== undefined && { minRows: field.minRows })}
              {...(field.countInfoTooltip !== undefined && { countInfoTooltip: field.countInfoTooltip })}
              {...(field.required !== undefined && { required: field.required })}
            />
          );
        })}
      </DrawerContent>
    </AdminDrawer>
  );
});
