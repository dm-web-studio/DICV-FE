export interface Notice {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt?: string;
  body?: string;
  isPinned: boolean;
  publishedAt: string;
}

export interface ParsedNotice extends Notice {
  displayDay: string;
  displayMonth: string;
  displayFullDate: string;
  displayTime: string;
}

export interface GetNoticesParams {
  search?: string;
  category?: string;
  year?: string;
  sort?: string;
  page?: number;
  limit?: number;
  isPinned?: boolean;
}
