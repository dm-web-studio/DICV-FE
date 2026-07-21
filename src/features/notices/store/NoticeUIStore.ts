import { observable, action } from 'mobx';

export class NoticeUIStore {
  @observable accessor searchQuery = '';
  @observable accessor categoryFilter: string | null = null;
  @observable accessor yearFilter: string | null = null;
  @observable accessor sortFilter: 'newest' | 'oldest' = 'newest';
  @observable accessor page = 1;
  @observable accessor selectedNoticeSlug: string | null = null;

  @action
  setSearchQuery(query: string): void {
    this.searchQuery = query;
    this.page = 1;
  }

  @action
  setCategoryFilter(category: string | null): void {
    this.categoryFilter = category;
    this.page = 1;
  }

  @action
  setYearFilter(year: string | null): void {
    this.yearFilter = year;
    this.page = 1;
  }

  @action
  setSortFilter(sort: 'newest' | 'oldest'): void {
    this.sortFilter = sort;
    this.page = 1;
  }

  @action
  setPage(page: number): void {
    this.page = page;
  }

  @action
  setSelectedNotice(slug: string | null): void {
    this.selectedNoticeSlug = slug;
  }
}

