import { apiClient } from '../../../shared/api/apiClient';
import type { ApiSuccess } from '../../../shared/api/types';
import type { Notice, GetNoticesParams } from '../types';

export const noticeService = {
  async getNotices(params?: GetNoticesParams): Promise<ApiSuccess<Notice[]>> {
    const { data } = await apiClient.get<ApiSuccess<Notice[]>>('/notices', { params });
    return data;
  },

  async getPinnedNotices(): Promise<Notice[]> {
    const { data } = await apiClient.get<ApiSuccess<Notice[]>>('/notices/ticker');
    return data.data;
  },

  async getNoticeBySlug(slug: string): Promise<Notice> {
    const { data } = await apiClient.get<ApiSuccess<Notice>>(`/notices/${slug}`);
    return data.data;
  },

  async getPopupNotice(): Promise<Notice | null> {
    try {
      const { data } = await apiClient.get<ApiSuccess<Notice | null>>('/notices/popup');
      return data.data;
    } catch {
      return null;
    }
  }
};
