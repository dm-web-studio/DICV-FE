import { apiClient } from '../../../shared/api/apiClient';
import type { ApiSuccess } from '../../../shared/api/types';
import type { Album, GalleryImage } from '../types';

export const galleryService = {
  async fetchAlbums(): Promise<ApiSuccess<Album[]>> {
    const { data } = await apiClient.get<ApiSuccess<Album[]>>('/gallery/albums');
    return data;
  },

  async fetchAlbumImages(albumId?: string, page = 1, limit = 20): Promise<ApiSuccess<GalleryImage[]>> {
    const params: Record<string, any> = { page, limit };
    if (albumId) params.album = albumId;

    const { data } = await apiClient.get<ApiSuccess<GalleryImage[]>>('/gallery', { params });
    return data;
  },
};
