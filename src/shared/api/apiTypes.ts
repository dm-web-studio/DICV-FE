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

export interface StaffDesk {
  type: 'principal' | 'president' | 'vice-principal';
  name: string;
  photoUrl: string;
  photoPublicId?: string;
  signatureUrl?: string;
  signaturePublicId?: string;
  message: string;
  homeMessage?: string;
}

export const NOTICE_CATEGORIES = [
  'admission', 'examination', 'holiday', 'circular', 'event', 'result', 'scholarship', 'tender', 'general'
] as const;
export type NoticeCategory = typeof NOTICE_CATEGORIES[number];

export const NOTICE_CATEGORY_LABELS: Record<NoticeCategory, string> = {
  admission: 'Admissions',
  examination: 'Examinations',
  holiday: 'Holiday',
  circular: 'Circular',
  event: 'Events',
  result: 'Results',
  scholarship: 'Scholarships',
  tender: 'Tender',
  general: 'General',
};

export interface Notice {
  _id?: ID;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: NoticeCategory;
  isPinned: boolean;
  imageUrl?: string;
  imagePublicId?: string;
  showAsPopup: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}
