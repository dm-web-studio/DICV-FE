import { observable, action } from 'mobx';

class ToastStore {
  @observable accessor message: string | null = null;
  @observable accessor severity: 'success' | 'error' | 'info' | 'warning' = 'info';

  @action
  show(message: string, severity: ToastStore['severity'] = 'info'): void {
    this.message = message;
    this.severity = severity;
  }

  @action
  clear(): void {
    this.message = null;
  }
}

export const toastStore = new ToastStore();
