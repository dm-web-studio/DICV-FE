export type ID = string;

export interface Faculty {
  _id: ID;
  name: string;
  designation: string;
  experience: string;
  degrees: string[];
  description?: string;
  photoUrl?: string;
  photoPublicId?: string;
}
