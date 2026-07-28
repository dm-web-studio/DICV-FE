import { apiClient } from '../../../shared/api/apiClient';
import type { StaffDesk } from '../../../shared/api/apiTypes';
import type { ApiSuccess } from '../../../shared/api/types';

export const staffDeskAdminService = {
  async list(): Promise<StaffDesk[]> {
    const [principalRes, presidentRes, vicePrincipalRes] = await Promise.all([
      apiClient.get<ApiSuccess<StaffDesk>>('/staff-desk/principal'),
      apiClient.get<ApiSuccess<StaffDesk>>('/staff-desk/president'),
      apiClient.get<ApiSuccess<StaffDesk>>('/staff-desk/vice-principal'),
    ]);
    return [
      principalRes.data.data,
      presidentRes.data.data,
      vicePrincipalRes.data.data,
    ];
  },
  
  async update(type: 'principal' | 'president' | 'vice-principal', payload: Record<string, any>): Promise<StaffDesk> {
    const { data } = await apiClient.put<ApiSuccess<StaffDesk>>(`/admin/staff-desk/${type}`, payload);
    return data.data;
  },
};
