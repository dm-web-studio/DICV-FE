import { observable, action, runInAction } from 'mobx';
import { siteSettingsService, type SiteSettings } from '../../../shared/services/siteSettingsService';
import { toastStore } from '../../../shared/stores/ToastStore';
import { siteSettingsStore } from '../../../shared/stores/SiteSettingsStore';

export type FieldConfig = {
  key: string;
  label: string;
  type: 'text' | 'multiline' | 'number';
  category: 'general' | 'stat' | 'social';
};

export const SETTINGS_CONFIG: { section: string; fields: FieldConfig[] }[] = [
  {
    section: 'General Information',
    fields: [
      { key: 'schoolName', label: 'School Name', type: 'text', category: 'general' },
      { key: 'address', label: 'Address', type: 'multiline', category: 'general' },
      { key: 'phone', label: 'Phone Number', type: 'text', category: 'general' },
      { key: 'email', label: 'Email Address', type: 'text', category: 'general' },
    ],
  },
  {
    section: 'Key Statistics',
    fields: [
      { key: 'studentsEnrolled', label: 'Students Enrolled', type: 'number', category: 'stat' },
      { key: 'awards', label: 'Awards Won', type: 'number', category: 'stat' },
      { key: 'classes', label: 'Classes', type: 'number', category: 'stat' },
      { key: 'courses', label: 'Courses', type: 'number', category: 'stat' },
    ],
  },
  {
    section: 'Social Links',
    fields: [
      { key: 'facebook', label: 'Facebook URL', type: 'text', category: 'social' },
      { key: 'instagram', label: 'Instagram URL', type: 'text', category: 'social' },
      { key: 'youtube', label: 'YouTube URL', type: 'text', category: 'social' },
      { key: 'twitter', label: 'Twitter / X URL', type: 'text', category: 'social' },
    ],
  }
];

const initialSettingsState: SiteSettings = {
  schoolName: '',
  phone: '',
  email: '',
  address: '',
  socialLinks: [],
  stats: {
    studentsEnrolled: 0,
    awards: 0,
    classes: 0,
    courses: 0,
  }
};

export class SiteSettingsAdminStore {
  @observable accessor isSaving = false;
  @observable accessor draftSettings: SiteSettings = initialSettingsState;

  @action
  async initFromGlobal(): Promise<void> {
    if (!siteSettingsStore.settings) {
      await siteSettingsStore.fetchSettings();
    }
    runInAction(() => {
      if (siteSettingsStore.settings) {
        this.draftSettings = JSON.parse(JSON.stringify(siteSettingsStore.settings));
      }
    });
  }

  @action
  updateField<K extends keyof SiteSettings>(field: K, value: SiteSettings[K]): void {
    this.draftSettings[field] = value;
  }

  @action
  updateStat(stat: keyof SiteSettings['stats'], value: number): void {
    this.draftSettings.stats[stat] = value;
  }

  @action
  updateSocialLink(platform: string, url: string): void {
    if (!this.draftSettings.socialLinks) {
      this.draftSettings.socialLinks = [];
    }
    const links = this.draftSettings.socialLinks!;
    const existingIndex = links.findIndex(l => l.platform.toLowerCase() === platform.toLowerCase());
    if (existingIndex >= 0) {
      if (url) {
        links[existingIndex]!.url = url;
      } else {
        links.splice(existingIndex, 1);
      }
    } else if (url) {
      links.push({ platform, url });
    }
  }

  getSocialLink(platform: string): string {
    return this.draftSettings.socialLinks?.find(l => l.platform.toLowerCase() === platform.toLowerCase())?.url || '';
  }

  @action
  async saveSettings(): Promise<boolean> {
    this.isSaving = true;
    try {
      const response = await siteSettingsService.updateSettings(this.draftSettings);
      
      runInAction(() => {
        // Update global store directly
        siteSettingsStore.settings = response.data;
      });
      
      toastStore.show('Site settings updated successfully', 'success');
      return true;
    } catch (error) {
      toastStore.show(error instanceof Error ? error.message : 'Failed to save settings', 'error');
      return false;
    } finally {
      runInAction(() => {
        this.isSaving = false;
      });
    }
  }
}

// Singleton for admin settings
export const siteSettingsAdminStore = new SiteSettingsAdminStore();
