import { apiClient } from '../../../shared/api/apiClient';
import type { GalleryAlbum, GalleryImage } from '../../../shared/api/apiTypes';

export const adminGalleryService = {
  async getAlbums(): Promise<{ data: GalleryAlbum[] }> {
    const { data } = await apiClient.get<{ data: GalleryAlbum[] }>('/gallery/albums');
    return data;
  },

  async createAlbum(formData: FormData): Promise<{ data: GalleryAlbum }> {
    const { data } = await apiClient.post<{ data: GalleryAlbum }>('/admin/gallery/albums', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },

  async updateAlbum(id: string, formData: FormData): Promise<{ data: GalleryAlbum }> {
    const { data } = await apiClient.put<{ data: GalleryAlbum }>(`/admin/gallery/albums/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },

  async deleteAlbum(id: string): Promise<void> {
    await apiClient.delete(`/admin/gallery/albums/${id}`);
  },

  async getAlbumPhotos(albumId: string, page = 1, limit = 100): Promise<{ data: GalleryImage[]; meta: any }> {
    const { data } = await apiClient.get<{ data: GalleryImage[]; meta: any }>('/gallery', { params: { album: albumId, page, limit } });
    return data;
  },

  async uploadPhoto(formData: FormData): Promise<{ data: GalleryImage }> {
    const { data } = await apiClient.post<{ data: GalleryImage }>('/admin/gallery', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },

  async deletePhoto(id: string): Promise<void> {
    await apiClient.delete(`/admin/gallery/${id}`);
  },
};
