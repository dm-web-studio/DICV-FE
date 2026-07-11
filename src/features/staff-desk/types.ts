export interface StaffDesk {
  type: 'principal' | 'president';
  name: string;
  photoUrl: string;
  signatureUrl?: string;
  message: string;
}
