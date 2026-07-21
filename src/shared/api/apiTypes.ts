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

export interface GalleryAlbum {
  _id: ID;
  name: string;
  slug: string;
  coverImageUrl?: string;
  coverImagePublicId?: string;
  imageCount: number;
}

export interface Notice {
  _id?: ID;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: string;
  isPinned: boolean;
  imageUrl?: string;
  showAsPopup: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}
