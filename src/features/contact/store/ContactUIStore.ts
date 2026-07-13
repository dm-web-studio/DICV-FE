import { observable, action } from 'mobx';

type FieldName = 'fullName' | 'email' | 'phone' | 'subject' | 'message';
type ErrorFields = Exclude<FieldName, 'phone'>;

export class ContactUIStore {
  @observable accessor fullName = '';
  @observable accessor email = '';
  @observable accessor phone = '';
  @observable accessor subject = '';
  @observable accessor message = '';
  @observable accessor fieldErrors: Partial<Record<ErrorFields, string>> = {};

  @action
  setField(field: FieldName, value: string): void {
    this[field] = value;
    if (field !== 'phone') {
      if (this.fieldErrors[field]) {
        delete this.fieldErrors[field];
      }
    }
  }

  @action
  validate(): boolean {
    const errors: Partial<Record<ErrorFields, string>> = {};
    let isValid = true;

    if (!this.fullName.trim()) {
      errors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!this.email.trim()) {
      errors.email = 'Email Address is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      errors.email = 'Invalid Email Address';
      isValid = false;
    }

    if (!this.subject) {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (!this.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    this.fieldErrors = errors;
    return isValid;
  }

  @action
  reset(): void {
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.subject = '';
    this.message = '';
    this.fieldErrors = {};
  }
}
