import { observable, action, runInAction } from 'mobx';
import { contactService } from '../services/contactService';
import type { ContactUIStore } from './ContactUIStore';
import { toastStore } from '../../../shared/stores/ToastStore';
import type { ContactPayload } from '../types';

export class ContactDomainStore {
  @observable accessor isSubmitting = false;
  @observable accessor isSubmitted = false;
  @observable accessor error: string | null = null;
  
  public readonly subjects = [
    'Admission Query',
    'General Inquiry',
    'Academic Information',
    'Feedback',
    'Complaint',
    'Other',
  ] as const;

  ui: ContactUIStore;

  constructor(ui: ContactUIStore) {
    this.ui = ui;
    this.ui.subject = this.subjects[0];
  }

  @action
  async submit(): Promise<void> {
    if (!this.ui.validate()) return;
    
    this.isSubmitting = true;
    this.error = null;
    
    try {
      const payload: ContactPayload = {
        name: this.ui.fullName,
        email: this.ui.email,
        subject: this.ui.subject,
        message: this.ui.message,
      };
      
      if (this.ui.phone.trim() !== '') {
        payload.phone = this.ui.phone;
      }
      
      await contactService.submit(payload);
      
      runInAction(() => {
        this.isSubmitted = true;
        toastStore.show('Message sent — we’ll get back to you soon.', 'success');
        this.ui.reset();
        this.ui.subject = this.subjects[0];
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to send message';
        toastStore.show(this.error, 'error');
      });
    } finally {
      runInAction(() => {
        this.isSubmitting = false;
      });
    }
  }
}
