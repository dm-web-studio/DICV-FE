import { apiClient } from '../api/apiClient';
import type { ApiSuccess } from '../api/types';

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteStats {
  studentsEnrolled: number;
  awards: number;
  classes: number;
  courses: number;
}

export interface SiteSettings {
  address: string;
  email: string;
  phone: string;
  schoolName: string;
  socialLinks: SocialLink[];
  stats: SiteStats;
}

export const siteSettingsService = {
  async getSettings(): Promise<ApiSuccess<SiteSettings>> {
    const { data } = await apiClient.get<ApiSuccess<SiteSettings>>('/site/settings');
    return data;
  },
};
