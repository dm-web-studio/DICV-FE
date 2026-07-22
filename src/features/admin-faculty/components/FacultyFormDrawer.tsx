import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';
import { ImageUpload } from '../../../shared/components/ImageUpload';
import { AdminDrawer } from '../../../shared/components/AdminDrawer/AdminDrawer';
import { CharCountTextArea } from '../../../shared/components/CharCountTextArea/CharCountTextArea';
import { useFacultyAdminStore } from '../store/FacultyAdminStoreContext';
import { DrawerContent } from './FacultyFormDrawer.styles';

export const FacultyFormDrawer = observer(function FacultyFormDrawer() {
  const { ui, domain } = useFacultyAdminStore();


  const handleFileChange = (file: File | null, previewUrl: string | null) => {
    ui.setDraftPhoto(file, previewUrl);
  };

  const handleRemoveImage = () => {
    ui.setDraftPhoto(null, null);
  };

  const handleSave = async () => {
    const formData = ui.getFormData();

    try {
      if (ui.drawerMode === 'create') {
        await domain.createFaculty(formData);
      } else {
        await domain.updateFaculty(ui.editingFaculty!._id, formData);
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
        <ImageUpload
          title="Photo (Optional)"
          previewUrl={ui.draftPreviewUrl}
          onFileChange={handleFileChange}
          onRemove={handleRemoveImage}
          height={200}
        />

        {ui.textFieldsConfig.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            value={ui[field.name]}
            onChange={(e) => ui.setDraftField(field.name, e.target.value)}
            required={field.required}
            fullWidth
            placeholder={field.placeholder}
          />
        ))}

        <Autocomplete
          multiple
          freeSolo
          options={[]}
          value={ui.draftDegrees}
          onChange={(_event, newValue) => {
            const processed = newValue.flatMap(val => 
              typeof val === 'string' ? val.split(',').map(v => v.trim()).filter(Boolean) : val
            );
            ui.setDraftDegrees(processed as string[]);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Degrees"
              placeholder="Type and press enter or comma"
              helperText="Press Enter or type a comma to add a degree"
            />
          )}
        />

        <CharCountTextArea
          label="Description (Optional)"
          value={ui.draftDescription}
          onChange={(e) => ui.setDraftField('draftDescription', e.target.value)}
          maxChars={1000}
          minRows={4}
        />
      </DrawerContent>
    </AdminDrawer>
  );
});
