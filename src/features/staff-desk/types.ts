export interface StaffDesk {
  type: 'principal' | 'president' | 'vice-principal';
  name: string;
  photoUrl: string;
  signatureUrl?: string;
  message: string;
}
