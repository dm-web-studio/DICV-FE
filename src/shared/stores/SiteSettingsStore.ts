import { observable, action, runInAction } from 'mobx';
import { siteSettingsService, type SiteSettings } from '../services/siteSettingsService';

class SiteSettingsStore {
  @observable accessor settings: SiteSettings | null = null;
  @observable accessor isLoading = false;
  @observable accessor error: string | null = null;

  @action
  async fetchSettings(): Promise<void> {
    if (this.settings || this.isLoading) return; // Don't refetch if already loaded or loading

    this.isLoading = true;
    this.error = null;

    try {
      const { data } = await siteSettingsService.getSettings();
      runInAction(() => {
        this.settings = data;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load site settings';
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export const siteSettingsStore = new SiteSettingsStore();
