import { apiClient } from '../../../shared/api/apiClient';
import type { ApiSuccess } from '../../../shared/api/types';
import type { Album, GalleryImage } from '../types';

interface GetGalleryParams {
  album?: string;
  page?: number;
  limit?: number;
}

export const galleryService = {
  async getAlbums(): Promise<ApiSuccess<Album[]>> {
    const { data } = await apiClient.get<ApiSuccess<Album[]>>('/gallery/albums');
    return data;
  },
  async getGallery(params: GetGalleryParams): Promise<ApiSuccess<GalleryImage[]>> {
    const { data } = await apiClient.get<ApiSuccess<GalleryImage[]>>('/gallery', { params });
    return data;
  },
};
