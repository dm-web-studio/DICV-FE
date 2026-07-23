import { observer } from 'mobx-react-lite';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { 
  CloudUploadOutlined as UploadIcon, 
  EditOutlined as EditIcon, 
  DeleteOutlined as DeleteIcon, 
  PhotoCameraOutlined as CameraIcon,
  CalendarTodayOutlined as CalendarIcon,
  ImageOutlined as ImageIcon
} from '@mui/icons-material';
import { useAdminGalleryStore } from '../store/AdminGalleryStoreContext';
import { useRef } from 'react';
import { showConfirmation } from '../../../shared/stores/ConfirmDialogStore';
import { 
  DetailPanelContainer, 
  DetailContentContainer, 
  HeaderStack, 
  CoverImageContainer, 
  ChangeCoverButtonWrapper, 
  ChangeCoverButton, 
  ContentBox, 
  TitleText, 
  MetadataStack, 
  MetadataItemStack, 
  MetadataItemText, 
  ActionButtonsStack 
} from './AlbumDetailPanel.styles';

export const AlbumDetailPanel = observer(function AlbumDetailPanel() {
  const { domain, ui } = useAdminGalleryStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const album = domain.selectedAlbum;

  if (!album) {
    return (
      <DetailPanelContainer>
        <Typography variant="body1" color="text.secondary">Select an album to view details</Typography>
      </DetailPanelContainer>
    );
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await domain.uploadPhotos(album._id, Array.from(e.target.files));
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleCoverClick = () => {
    coverInputRef.current?.click();
  };

  const handleCoverChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      await domain.updateAlbum(album._id, formData);
      if (coverInputRef.current) coverInputRef.current.value = '';
    }
  };

  const handleDelete = () => {
    showConfirmation({
      title: 'Delete Album',
      message: `Are you sure you want to delete the album "${album.name}"? This will delete all photos inside it.`,
      confirmLabel: 'Delete Album',
      variant: 'error',
      onConfirm: async () => {
        await domain.deleteAlbum(album._id);
      }
    });
  };

  return (
    <DetailContentContainer>
      <HeaderStack>
        <CoverImageContainer sx={album.coverImageUrl ? { backgroundImage: `url(${album.coverImageUrl})` } : {}}>
          <ChangeCoverButtonWrapper>
            <ChangeCoverButton 
              size="small" 
              startIcon={<CameraIcon fontSize="small" />} 
              onClick={handleCoverClick}
            >
              Change Cover
            </ChangeCoverButton>
          </ChangeCoverButtonWrapper>
        </CoverImageContainer>

        <ContentBox>
          {/* Line 1: Title */}
          <TitleText variant="h2">
            {album.name}
          </TitleText>
          
          {/* Line 2: Calendar & Photos */}
          <MetadataStack>
            <MetadataItemStack>
              <CalendarIcon sx={{ fontSize: 16 }} />
              <MetadataItemText variant="body2">
                {new Date(album.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </MetadataItemText>
            </MetadataItemStack>
            <MetadataItemStack>
              <ImageIcon sx={{ fontSize: 16 }} />
              <MetadataItemText variant="body2">
                {album.imageCount} Photos
              </MetadataItemText>
            </MetadataItemStack>
          </MetadataStack>

          {/* Line 3: Description & Last Updated */}
          <Box>
            {album.description && (
              <Typography variant="body1" color="text.secondary">
                {album.description}
              </Typography>
            )}
            <Typography variant="caption" color="text.secondary">
              Last updated: {new Date(album.updatedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </Typography>
          </Box>

          {/* Line 4: Buttons */}
          <ActionButtonsStack>
            <Button 
              variant="contained" 
              startIcon={domain.isSaving ? <CircularProgress size={16} color="inherit" /> : <UploadIcon sx={{ fontSize: 18 }} />} 
              onClick={handleUploadClick}
              disabled={domain.isSaving}
            >
              {domain.isSaving ? 'Uploading...' : 'Upload Photos'}
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              startIcon={<EditIcon sx={{ fontSize: 18 }} />} 
              onClick={() => ui.openEditAlbumDialog(album)}
            >
              Edit Album
            </Button>
            <Button 
              variant="outlined" 
              color="error" 
              startIcon={<DeleteIcon sx={{ fontSize: 18 }} />} 
              onClick={handleDelete}
            >
              Delete Album
            </Button>
          </ActionButtonsStack>
        </ContentBox>
      </HeaderStack>

      <input 
        type="file" 
        multiple 
        accept="image/*" 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
        onChange={handleFileChange} 
      />
      <input 
        type="file" 
        accept="image/*" 
        ref={coverInputRef} 
        style={{ display: 'none' }} 
        onChange={handleCoverChange} 
      />
    </DetailContentContainer>
  );
});
