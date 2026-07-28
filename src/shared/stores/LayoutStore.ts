import { observable, action } from 'mobx';

class LayoutStore {
  @observable accessor isMobileNavOpen: boolean = false;

  @action
  toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  @action
  closeMobileNav(): void {
    this.isMobileNavOpen = false;
  }
}

export const layoutStore = new LayoutStore();
