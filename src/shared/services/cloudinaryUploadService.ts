import axios from 'axios';
import { apiClient } from '../api/apiClient';

interface SignatureResponse {
  data: {
    signature: string;
    timestamp: number;
    apiKey: string;
    cloudName: string;
    folder: string;
  };
}

interface UploadResult {
  secure_url: string;
  public_id: string;
}

export const cloudinaryUploadService = {
  async uploadFile(
    file: File,
    folder: string,
    onProgress?: (progress: number) => void
  ): Promise<UploadResult> {
    // 1. Get signature from backend
    const { data } = await apiClient.get<SignatureResponse>('/admin/upload/signature', {
      params: { folder },
    });
    
    const { signature, timestamp, apiKey, cloudName } = data.data;

    // 2. Prepare FormData for Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', apiKey);
    formData.append('timestamp', timestamp.toString());
    formData.append('signature', signature);
    formData.append('folder', folder);

    // 3. Upload directly to Cloudinary
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    
    const response = await axios.post(cloudinaryUrl, formData, {
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total && onProgress) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(percentCompleted);
        }
      },
    });

    return {
      secure_url: response.data.secure_url,
      public_id: response.data.public_id,
    };
  },
};
