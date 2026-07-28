import React, { useRef, useState } from 'react';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { UploaderContainer, DropzoneArea, ItemList } from './MultiImageUploader.styles';
import { useUploadQueue } from '../../hooks/useUploadQueue';
import { UploadItemRow } from './UploadItemRow';
import { ExistingItemRow } from './ExistingItemRow';
import type { UploadItem } from './types';

interface MultiImageUploaderProps {
  maxFiles?: number;
  accept?: string;
  maxSizeMb?: number;
  uploadFn: (file: File) => Promise<{ url: string; publicId: string }>;
  onComplete: (results: { url: string; publicId: string }[]) => void;
  existingImages?: { url: string; publicId: string }[];
}

export function MultiImageUploader({
  maxFiles = 1,
  accept = 'image/jpeg,image/png,image/webp',
  maxSizeMb = 5,
  uploadFn,
  onComplete,
  existingImages = [],
}: MultiImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const {
    items,
    finalImages,
    addItems,
    handleRetry,
    handleRemoveExisting,
    handleRemoveNew,
  } = useUploadQueue(uploadFn, onComplete, existingImages);

  const handleFiles = (files: FileList | File[]) => {
    const newFiles = Array.from(files);
    
    if (finalImages.length + items.length + newFiles.length > maxFiles) {
      alert(`Cannot exceed maximum of ${maxFiles} files.`);
      return;
    }

    const newItems: UploadItem[] = [];
    
    for (const file of newFiles) {
      if (file.size > maxSizeMb * 1024 * 1024) {
        alert(`File ${file.name} exceeds ${maxSizeMb}MB limit.`);
        continue;
      }
      
      newItems.push({
        id: crypto.randomUUID(),
        file,
        previewUrl: URL.createObjectURL(file),
        status: 'pending',
      });
    }

    if (newItems.length > 0) {
      addItems(newItems);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const canAddMore = finalImages.length + items.length < maxFiles;
  const hasItems = finalImages.length > 0 || items.length > 0;

  return (
    <UploaderContainer>
      {canAddMore && (
        <>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept={accept}
            multiple={maxFiles > 1}
            onChange={(e) => {
              if (e.target.files) handleFiles(e.target.files);
              e.target.value = '';
            }}
          />
          <DropzoneArea
            isDragging={isDragging}
            isError={false}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <CloudUploadIcon color={isDragging ? 'primary' : 'action'} fontSize="large" />
            <Typography variant="body1" color="textPrimary">
              Click or drag files here to upload
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Supported: {accept.replace(/image\//g, '').replace(/,/g, ', ')} (Max {maxSizeMb}MB)
            </Typography>
          </DropzoneArea>
        </>
      )}

      {hasItems && (
        <ItemList>
          {finalImages.map((img) => (
            <ExistingItemRow key={img.publicId} image={img} onRemove={handleRemoveExisting} />
          ))}

          {items.map((item) => (
            <UploadItemRow
              key={item.id}
              item={item}
              onRemove={handleRemoveNew}
              onRetry={handleRetry}
            />
          ))}
        </ItemList>
      )}
    </UploaderContainer>
  );
}
