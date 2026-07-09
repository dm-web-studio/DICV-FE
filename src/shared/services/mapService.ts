import { apiClient } from '../api/apiClient';
import type { ApiSuccess } from '../api/types';

export interface SchoolLocation {
  latitude: number;
  longitude: number;
  address: string;
  embedUrl?: string;
}

export const mapService = {
  async getSchoolLocation(): Promise<SchoolLocation> {
    const { data } = await apiClient.get<ApiSuccess<SchoolLocation>>('/site/location');
    return data.data;
  },
};
