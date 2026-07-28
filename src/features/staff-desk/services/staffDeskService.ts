import { apiClient } from '../../../shared/api/apiClient';
import type { ApiSuccess } from '../../../shared/api/types';
import type { StaffDesk } from '../types';

export const staffDeskService = {
  async getByType(type: 'principal' | 'president' | 'vice-principal'): Promise<StaffDesk> {
    const { data } = await apiClient.get<ApiSuccess<StaffDesk>>(`/staff-desk/${type}`);
    return data.data;
  },
};
