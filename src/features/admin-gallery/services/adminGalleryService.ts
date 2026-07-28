import { apiClient } from '../../../shared/api/apiClient';
import type { GalleryAlbum, GalleryImage } from '../../../shared/api/apiTypes';

export const adminGalleryService = {
  async getAlbums(): Promise<{ data: GalleryAlbum[] }> {
    const { data } = await apiClient.get<{ data: GalleryAlbum[] }>('/gallery/albums');
    return data;
  },

  async createAlbum(payload: { name: string; slug: string; description?: string; coverImageUrl?: string; coverImagePublicId?: string }): Promise<{ data: GalleryAlbum }> {
    const { data } = await apiClient.post<{ data: GalleryAlbum }>('/admin/gallery/albums', payload);
    return data;
  },

  async updateAlbum(id: string, payload: { name?: string; description?: string; removeCoverImage?: string; coverImageUrl?: string; coverImagePublicId?: string }): Promise<{ data: GalleryAlbum }> {
    const { data } = await apiClient.put<{ data: GalleryAlbum }>(`/admin/gallery/albums/${id}`, payload);
    return data;
  },

  async deleteAlbum(id: string): Promise<void> {
    await apiClient.delete(`/admin/gallery/albums/${id}`);
  },

  async getAlbumPhotos(albumId: string, page = 1, limit = 100): Promise<{ data: GalleryImage[]; meta: any }> {
    const { data } = await apiClient.get<{ data: GalleryImage[]; meta: any }>('/gallery', { params: { album: albumId, page, limit } });
    return data;
  },

  async uploadPhoto(payload: { album: string; caption?: string; order?: number; imageUrl: string; cloudinaryPublicId: string }): Promise<{ data: GalleryImage }> {
    const { data } = await apiClient.post<{ data: GalleryImage }>('/admin/gallery', payload);
    return data;
  },

  async deletePhoto(id: string): Promise<void> {
    await apiClient.delete(`/admin/gallery/${id}`);
  },
};
