import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { ImageSection, ImagePreviewBox, ImagePreview, HelperText, RemoveIconButton, UploadButton } from './ImageUpload.styles';

export interface ImageUploadProps {
  title: string;
  helperText?: string;
  previewUrl: string | null;
  onFileChange: (file: File | null, previewUrl: string | null) => void;
  onRemove: () => void;
  height?: number;
}

export function ImageUpload({
  title,
  helperText = 'Supported: jpeg, png, webp (Max 5MB)',
  previewUrl,
  onFileChange,
  onRemove,
  height = 120,
}: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      onFileChange(file, URL.createObjectURL(file));
    }
  };

  const handleRemove = () => {
    onRemove();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <ImageSection>
      <Typography variant="subtitle2" gutterBottom sx={{ mb: 0 }}>{title}</Typography>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      {previewUrl ? (
        <ImagePreviewBox sx={{ height }}>
          <ImagePreview src={previewUrl} alt="Preview" />
          <RemoveIconButton size="small" onClick={handleRemove}>
            <DeleteIcon fontSize="small" />
          </RemoveIconButton>
        </ImagePreviewBox>
      ) : (
        <Box>
          <UploadButton
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            onClick={() => fileInputRef.current?.click()}
            fullWidth
            sx={height !== 120 ? { height } : undefined}
          >
            Upload Photo
          </UploadButton>
          <HelperText variant="caption">
            {helperText}
          </HelperText>
        </Box>
      )}
    </ImageSection>
  );
}
