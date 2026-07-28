import { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { Dialog, Button, TextField, Typography, Divider } from '@mui/material';
import { useAdminGalleryStore } from '../store/AdminGalleryStoreContext';
import { ImageUpload } from '../../../shared/components/ImageUpload/ImageUpload';
import { CharCountTextArea } from '../../../shared/components/CharCountTextArea/CharCountTextArea';
import { 
  StyledDialogTitle, 
  StyledDialogContent, 
  DialogFormStack, 
  StyledDialogActions
} from './AlbumDialogs.styles';
import { UploadProgress } from '../../../shared/components/UploadProgress';

export const AlbumDialogs = observer(function AlbumDialogs() {
  const { ui, domain } = useAdminGalleryStore();

  // --- Add Album Logic ---
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = ui.getCreateAlbumPayload();
    const file = ui.draftAlbumCoverFile || undefined;

    const success = await domain.createAlbum(payload, file);
    if (success) {
      ui.closeAddAlbumDialog();
    }
  };

  // --- Edit Album Logic ---
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.selectedAlbum) return;

    const payload = ui.getEditAlbumPayload(domain.selectedAlbum);
    const file = ui.draftAlbumCoverFile || undefined;

    const success = await domain.updateAlbum(domain.selectedAlbum._id, payload, file);
    if (success) {
      ui.closeEditAlbumDialog();
    }
  };

  // Unified Dialog State
  const isAdd = ui.isAddAlbumDialogOpen;
  const isEdit = ui.isEditAlbumDialogOpen;
  const isOpen = isAdd || isEdit;

  const handleClose = () => {
    if (isAdd) ui.closeAddAlbumDialog();
    if (isEdit) ui.closeEditAlbumDialog();
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (isAdd) return handleAddSubmit(e);
    if (isEdit) return handleEditSubmit(e);
  };

  const dialogConfig = useMemo(() => ({
    title: isAdd ? 'Add New Album' : 'Edit Album',
    submitLabel: isAdd ? 'Create Album' : 'Save Changes',
    fields: [
      {
        type: 'text' as const,
        id: 'draftAlbumName' as const,
        label: 'Album Name',
        required: true,
        placeholder: isAdd ? 'e.g. Annual Sports Day 2024' : undefined,
      },
      {
        type: 'textarea' as const,
        id: 'draftAlbumDescription' as const,
        label: 'Description',
        required: false,
        maxChars: 200,
        placeholder: isAdd ? 'Briefly describe what this album is about...' : undefined,
      },
      {
        type: 'image' as const,
        id: 'cover' as const,
        title: isAdd ? 'Cover Image (Optional)' : 'Cover Image',
        helperText: 'Recommended size: 800x600. Max 5MB.',
      }
    ]
  }), [isAdd]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <StyledDialogTitle>
          <Typography variant="h2">{dialogConfig.title}</Typography>
        </StyledDialogTitle>
        <Divider />
        
        <StyledDialogContent>
            {domain.uploadProgress !== null && (
              <UploadProgress 
                progress={domain.uploadProgress} 
                label="Uploading cover to storage bucket..." 
              />
            )}
          <DialogFormStack>
            {dialogConfig.fields.map(field => {
              if (field.type === 'text') {
                return (
                  <TextField
                    key={field.id}
                    label={field.label}
                    required={field.required}
                    fullWidth
                    value={ui[field.id]}
                    onChange={(e) => ui.setDraftAlbumField(field.id, e.target.value)}
                    placeholder={field.placeholder}
                  />
                );
              }
              if (field.type === 'textarea') {
                return (
                  <CharCountTextArea
                    key={field.id}
                    label={field.label}
                    fullWidth
                    multiline
                    rows={3}
                    maxChars={field.maxChars}
                    value={ui[field.id]}
                    onChange={(e) => ui.setDraftAlbumField(field.id, e.target.value.slice(0, field.maxChars))}
                    placeholder={field.placeholder}
                  />
                );
              }
              if (field.type === 'image') {
                return (
                  <ImageUpload
                    key={field.id}
                    title={field.title}
                    helperText={field.helperText}
                    previewUrl={ui.draftAlbumCoverPreview}
                    onFileChange={(file, url) => ui.setDraftAlbumCover(file, url)}
                    onRemove={() => ui.setDraftAlbumCover(null, null)}
                  />
                );
              }
              return null;
            })}
          </DialogFormStack>
        </StyledDialogContent>
        
        <Divider />
        <StyledDialogActions>
          <Button onClick={handleClose} color="inherit">Cancel</Button>
          <Button type="submit" variant="contained" disabled={domain.isSaving || !ui.draftAlbumName.trim()} sx={{ px: 4 }}>
            {dialogConfig.submitLabel}
          </Button>
        </StyledDialogActions>
      </form>
    </Dialog>
  );
});
