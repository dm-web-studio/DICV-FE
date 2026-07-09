export interface Notice {
  id: string;
  title: string;
  slug: string;
  content?: string;
  isPinned: boolean;
  publishedAt: string;
}
