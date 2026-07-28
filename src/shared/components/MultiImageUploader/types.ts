export type UploadItemStatus = 'pending' | 'uploading' | 'success' | 'failed';

export interface UploadItem {
  id: string;           
  file: File;
  previewUrl: string;    
  status: UploadItemStatus;
  progress?: number;      
  errorMessage?: string;
  result?: { url: string; publicId: string }; 
}
