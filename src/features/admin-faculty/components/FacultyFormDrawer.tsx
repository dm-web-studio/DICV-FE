import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';
import { ImageUpload } from '../../../shared/components/ImageUpload';
import { AdminDrawer } from '../../../shared/components/AdminDrawer/AdminDrawer';
import { CharCountTextArea } from '../../../shared/components/CharCountTextArea/CharCountTextArea';
import { useFacultyAdminStore } from '../store/FacultyAdminStoreContext';
import {
  DrawerContent
} from './FacultyFormDrawer.styles';
import { UploadProgress } from '../../../shared/components/UploadProgress';

export const FacultyFormDrawer = observer(function FacultyFormDrawer() {
  const { ui, domain } = useFacultyAdminStore();


  const handleFileChange = (file: File | null, previewUrl: string | null) => {
    ui.setDraftPhoto(file, previewUrl);
  };

  const handleRemoveImage = () => {
    ui.setDraftPhoto(null, null);
  };

  const handleSave = async () => {
    const payload = ui.getPayload();
    const file = ui.draftPhotoFile || undefined;

    try {
      if (ui.drawerMode === 'create') {
        await domain.createFaculty(payload, file);
      } else {
        await domain.updateFaculty(ui.editingFaculty!._id, payload, file);
      }
    } catch (error) {
      // Error handled by store
    }
  };

  return (
    <AdminDrawer
      open={ui.isDrawerOpen}
      onClose={() => !domain.isSubmitting && ui.closeDrawer()}
      title={ui.drawerMode === 'create' ? 'Add Faculty' : 'Edit Faculty'}
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
            {domain.isSubmitting ? 'Saving...' : (ui.drawerMode === 'create' ? 'Create Faculty' : 'Save Changes')}
          </Button>
        </>
      }
    >
      <DrawerContent>
        {domain.uploadProgress !== null && (
          <UploadProgress 
            progress={domain.uploadProgress} 
            label="Uploading photo to storage bucket..." 
          />
        )}
        {ui.formFieldsConfig.map((field) => {
          if (field.type === 'image') {
            return (
              <ImageUpload
                key={field.name}
                title={field.label}
                previewUrl={ui.draftPreviewUrl}
                onFileChange={handleFileChange}
                onRemove={handleRemoveImage}
                height={200}
              />
            );
          }

          if (field.type === 'autocomplete') {
            return (
              <Autocomplete
                key={field.name}
                multiple
                freeSolo
                options={[]}
                value={ui.draftDegrees}
                inputValue={ui.draftDegreesInput}
                onInputChange={(_event, newInputValue) => {
                  ui.setDraftDegreesInput(newInputValue);
                }}
                onChange={(_event, newValue) => {
                  const processed = newValue.flatMap(val =>
                    typeof val === 'string' ? val.split(',').map(v => v.trim()).filter(Boolean) : val
                  );
                  ui.setDraftDegrees(processed as string[]);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={field.label}
                    placeholder="Type and press enter or comma"
                    helperText="Press Enter or type a comma to add a degree"
                  />
                )}
              />
            );
          }

          if (field.type === 'text') {
            return (
              <TextField
                key={field.name}
                label={field.label}
                value={ui[field.name as 'draftName' | 'draftDesignation' | 'draftExperience' | 'draftDescription']}
                onChange={(e) => ui.setDraftField(field.name as any, e.target.value)}
                required={field.required}
                fullWidth
                placeholder={field.placeholder}
              />
            );
          }

          return (
            <CharCountTextArea
              key={field.name}
              label={field.label}
              value={ui[field.name as 'draftName' | 'draftDesignation' | 'draftExperience' | 'draftDescription']}
              onChange={(e) => ui.setDraftField(field.name as any, e.target.value)}
              maxChars={field.maxChars!}
              {...(field.minRows !== undefined && { minRows: field.minRows })}
              {...(field.required !== undefined && { required: field.required })}
            />
          );
        })}
      </DrawerContent>
    </AdminDrawer>
  );
});
