import { observable, action, computed } from 'mobx';
import type { Faculty } from '../../../shared/api/apiTypes';

export type DrawerMode = 'create' | 'edit';

export interface FieldConfig {
  name: 'photo' | 'draftName' | 'draftDesignation' | 'draftExperience' | 'draftDegrees' | 'draftDescription';
  label: string;
  type: 'image' | 'text' | 'autocomplete' | 'textarea';
  required?: boolean;
  placeholder?: string;
  maxChars?: number;
  minRows?: number;
}

export class FacultyAdminUIStore {
  @observable accessor search = '';
  @observable accessor isDrawerOpen = false;
  @observable accessor drawerMode: DrawerMode = 'create';
  @observable accessor editingFaculty: Faculty | null = null;

  // Draft fields
  @observable accessor draftName = '';
  @observable accessor draftDesignation = '';
  @observable accessor draftExperience = '';
  @observable accessor draftDescription = '';
  @observable accessor draftDegrees: string[] = [];
  @observable accessor draftPhotoFile: File | null = null;
  @observable accessor draftPreviewUrl: string | null = null;

  @computed
  get formFieldsConfig(): FieldConfig[] {
    return [
      { name: 'photo', label: 'Photo (Optional)', type: 'image' },
      { name: 'draftName', label: 'Name', type: 'text', required: true },
      { name: 'draftDesignation', label: 'Designation', type: 'text', required: true },
      { name: 'draftExperience', label: 'Experience', type: 'text', required: true, placeholder: 'e.g. 5 Years' },
      { name: 'draftDegrees', label: 'Degrees', type: 'autocomplete' },
      { name: 'draftDescription', label: 'Description (Optional)', type: 'textarea', maxChars: 1000, minRows: 4 },
    ];
  }

  @computed
  get isFormValid(): boolean {
    return this.draftName.trim() !== '' && 
           this.draftExperience.trim() !== '' && 
           this.draftDesignation.trim() !== '';
  }

  @action
  setSearch(search: string): void {
    this.search = search;
  }

  @action
  setDraftField(field: 'draftName' | 'draftDesignation' | 'draftExperience' | 'draftDescription', value: string): void {
    this[field] = value;
  }

  @action
  setDraftDegrees(degrees: string[]): void {
    this.draftDegrees = degrees;
  }

  @action
  setDraftPhoto(file: File | null, url: string | null): void {
    this.draftPhotoFile = file;
    this.draftPreviewUrl = url;
  }

  @action
  initDraft(faculty: Faculty | null): void {
    if (faculty) {
      this.draftName = faculty.name;
      this.draftDesignation = faculty.designation || '';
      this.draftExperience = faculty.experience;
      this.draftDescription = faculty.description || '';
      const parsedDegrees = (faculty.degrees || []).flatMap(d => 
        typeof d === 'string' ? d.split(',').map(v => v.trim()).filter(Boolean) : d
      );
      this.draftDegrees = parsedDegrees as string[];
      this.draftPreviewUrl = faculty.photoUrl || null;
      this.draftPhotoFile = null;
    } else {
      this.draftName = '';
      this.draftDesignation = '';
      this.draftExperience = '';
      this.draftDescription = '';
      this.draftDegrees = [];
      this.draftPhotoFile = null;
      this.draftPreviewUrl = null;
    }
  }

  @action
  openDrawer(mode: DrawerMode, faculty?: Faculty): void {
    this.drawerMode = mode;
    this.editingFaculty = faculty ?? null;
    this.initDraft(this.editingFaculty);
    this.isDrawerOpen = true;
  }

  @action
  closeDrawer(): void {
    this.isDrawerOpen = false;
    this.editingFaculty = null;
    this.initDraft(null);
  }

  getPayload(): Record<string, any> {
    const payload: Record<string, any> = {
      name: this.draftName,
      designation: this.draftDesignation,
      experience: this.draftExperience,
      description: this.draftDescription,
      degrees: this.draftDegrees,
    };
    
    if (!this.draftPhotoFile && !this.draftPreviewUrl && this.drawerMode === 'edit') {
      payload.removePhoto = true;
    } else if (!this.draftPhotoFile && this.drawerMode === 'edit' && this.draftPreviewUrl) {
       payload.photoUrl = this.editingFaculty?.photoUrl;
       payload.photoPublicId = this.editingFaculty?.photoPublicId;
    }
    
    return payload;
  }
}
