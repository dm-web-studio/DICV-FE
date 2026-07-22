import { observable, action, computed } from 'mobx';
import type { StaffDesk } from '../../../shared/api/apiTypes';

export class StaffDeskAdminUIStore {
  @observable accessor isDrawerOpen = false;
  @observable accessor editingDesk: StaffDesk | null = null;

  @observable accessor draftName = '';
  @observable accessor draftMessage = '';
  @observable accessor draftHomeMessage = '';
  @observable accessor draftPhotoFile: File | null = null;
  @observable accessor draftPreviewUrl: string | null = null;
  @observable accessor draftSignatureFile: File | null = null;
  @observable accessor draftSignaturePreviewUrl: string | null = null;

  @computed
  get roleConfig() {
    return {
      'principal': { label: 'Principal', color: 'blue' as const },
      'president': { label: 'President', color: 'purple' as const },
      'vice-principal': { label: 'Vice Principal', color: 'teal' as const },
    };
  }

  @computed
  get formFieldsConfig() {
    type FieldConfig = {
      name: 'photo' | 'signature' | 'draftName' | 'draftMessage' | 'draftHomeMessage';
      label: string;
      type: 'text' | 'textarea' | 'image';
      required?: boolean;
      maxChars?: number;
      minRows?: number;
      countInfoTooltip?: string;
    };

    const config: FieldConfig[] = [
      {
        name: 'photo' as const,
        label: 'Photo (Required)',
        type: 'image' as const,
      },
      {
        name: 'signature' as const,
        label: 'Signature (Required)',
        type: 'image' as const,
      },
      {
        name: 'draftName' as const,
        label: 'Name',
        type: 'text' as const,
        required: true,
      },
      {
        name: 'draftMessage' as const,
        label: 'Message',
        type: 'textarea' as const,
        required: true,
        maxChars: 1500,
        minRows: 6,
        countInfoTooltip: 'Max 1500 characters (with spaces)',
      },
    ];

    if (this.editingDesk?.type === 'principal') {
      config.push({
        name: 'draftHomeMessage' as const,
        label: 'Home Message',
        type: 'textarea' as const,
        required: true,
        maxChars: 500,
        minRows: 4,
        countInfoTooltip: 'Max 500 characters (with spaces)',
      });
    }

    return config;
  }

  @computed
  get isFormValid(): boolean {
    const isMessageValid = this.draftMessage.trim().length > 0 && this.draftMessage.length <= 1500;
    const isHomeMessageValid = this.editingDesk?.type === 'principal' 
      ? this.draftHomeMessage.trim().length > 0 && this.draftHomeMessage.length <= 500 
      : true;
      
    const hasPhoto = this.draftPreviewUrl !== null;
    const hasSignature = this.draftSignaturePreviewUrl !== null;
      
    return this.draftName.trim() !== '' && isMessageValid && isHomeMessageValid && hasPhoto && hasSignature;
  }

  @action
  setDraftField(field: 'draftName' | 'draftMessage' | 'draftHomeMessage', value: string): void {
    this[field] = value;
  }

  @action
  setDraftPhoto(file: File | null, url: string | null): void {
    this.draftPhotoFile = file;
    this.draftPreviewUrl = url;
  }

  @action
  setDraftSignature(file: File | null, url: string | null): void {
    this.draftSignatureFile = file;
    this.draftSignaturePreviewUrl = url;
  }

  @action
  initDraft(desk: StaffDesk | null): void {
    if (desk) {
      this.draftName = desk.name;
      this.draftMessage = desk.message;
      this.draftHomeMessage = desk.homeMessage || '';
      this.draftPreviewUrl = desk.photoUrl || null;
      this.draftPhotoFile = null;
      this.draftSignaturePreviewUrl = desk.signatureUrl || null;
      this.draftSignatureFile = null;
    } else {
      this.draftName = '';
      this.draftMessage = '';
      this.draftHomeMessage = '';
      this.draftPreviewUrl = null;
      this.draftPhotoFile = null;
      this.draftSignaturePreviewUrl = null;
      this.draftSignatureFile = null;
    }
  }

  @action
  openDrawer(desk: StaffDesk): void {
    this.editingDesk = desk;
    this.initDraft(this.editingDesk);
    this.isDrawerOpen = true;
  }

  @action
  closeDrawer(): void {
    this.isDrawerOpen = false;
    this.editingDesk = null;
    this.initDraft(null);
  }

  getFormData(): FormData {
    const formData = new FormData();
    formData.append('name', this.draftName);
    formData.append('message', this.draftMessage);
    
    if (this.editingDesk?.type === 'principal' && this.draftHomeMessage) {
      formData.append('homeMessage', this.draftHomeMessage);
    }
    
    if (this.draftPhotoFile) {
      formData.append('photo', this.draftPhotoFile);
    }
    
    if (this.draftSignatureFile) {
      formData.append('signature', this.draftSignatureFile);
    }
    
    return formData;
  }
}
