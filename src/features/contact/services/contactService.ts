import { apiClient } from '../../../shared/api/apiClient';
import type { ContactPayload } from '../types';

export const contactService = {
  async submit(payload: ContactPayload): Promise<void> {
    await apiClient.post('/contact', payload);
  },
};
