export interface Album {
  _id: string;
  name: string;
  slug: string;
  coverImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryImage {
  _id: string;
  album: {
    _id: string;
    name: string;
    slug: string;
  };
  imageUrl: string;
  caption: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}
