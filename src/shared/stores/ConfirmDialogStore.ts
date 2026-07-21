import { observable, action } from 'mobx';

type ConfirmVariant = 'info' | 'warning' | 'error';

interface ConfirmOptions {
  variant?: ConfirmVariant;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
}

class ConfirmDialogStore {
  @observable accessor isOpen = false;
  @observable accessor isProcessing = false;
  @observable accessor options: ConfirmOptions | null = null;

  @action
  show(options: ConfirmOptions): void {
    this.options = { variant: 'info', confirmLabel: 'Confirm', cancelLabel: 'Cancel', ...options };
    this.isOpen = true;
  }

  @action
  async confirm(): Promise<void> {
    if (!this.options) return;
    this.isProcessing = true;
    try {
      await this.options.onConfirm();
    } finally {
      this.isProcessing = false;
      this.close();
    }
  }

  @action
  async cancel(): Promise<void> {
    if (!this.options) return;
    this.isProcessing = true;
    try {
      await this.options.onCancel?.();
    } finally {
      this.isProcessing = false;
      this.close();
    }
  }

  @action
  private close(): void {
    this.isOpen = false;
    this.options = null;
  }
}

export const confirmDialogStore = new ConfirmDialogStore();

export function showConfirmation(options: ConfirmOptions): void {
  confirmDialogStore.show(options);
}
