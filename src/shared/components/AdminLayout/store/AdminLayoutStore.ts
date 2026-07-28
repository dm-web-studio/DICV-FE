import { observable, action } from 'mobx';

export class AdminLayoutStore {
  @observable accessor isSidebarOpen = true;
  @observable accessor isSettingsDrawerOpen = false;

  @action
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  @action
  setSidebarOpen(isOpen: boolean): void {
    this.isSidebarOpen = isOpen;
  }

  @action
  openSettingsDrawer(): void {
    this.isSettingsDrawerOpen = true;
  }

  @action
  closeSettingsDrawer(): void {
    this.isSettingsDrawerOpen = false;
  }
}
