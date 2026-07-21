import { action, observable, computed } from 'mobx';
import { type NoticeCategory, type Notice } from '../../../shared/api/apiTypes';

export class NoticeAdminUIStore {
  @observable accessor category: string | null = null;
  @observable accessor search: string = '';
  @observable accessor sort: string = 'newest';
  @observable accessor page: number = 1;
  @observable accessor pageSize: number = 20;

  @observable accessor drawerMode: 'closed' | 'create' | 'edit' = 'closed';
  @observable accessor selectedId: string | null = null;

  @action
  setCategory(category: string | null): void {
    this.category = category;
    this.page = 1;
  }

  @action
  setSearch(search: string): void {
    this.search = search;
    this.page = 1;
  }

  @action
  setSort(sort: string): void {
    this.sort = sort;
    this.page = 1;
  }

  @action
  setPage(page: number): void {
    this.page = page;
  }

  @action
  setPageSize(size: number): void {
    this.pageSize = size;
    this.page = 1;
  }

  @action
  openDrawer(mode: 'create' | 'edit', id: string | null = null): void {
    this.drawerMode = mode;
    this.selectedId = id;
  }

  @action
  closeDrawer(): void {
    this.drawerMode = 'closed';
    this.selectedId = null;
  }

  // --- Form Draft State ---
  @observable accessor draftTitle: string = '';
  @observable accessor draftSlug: string = '';
  @observable accessor draftSlugManuallyEdited: boolean = false;
  @observable accessor draftCategory: NoticeCategory = 'general';
  @observable accessor draftExcerpt: string = '';
  @observable accessor draftBody: string = '';
  @observable accessor draftIsPinned: boolean = false;
  @observable accessor draftShowAsPopup: boolean = false;
  @observable accessor draftImages: { url: string; publicId: string }[] = [];
  draftFile: File | null = null; // Not observable, only used on save

  @computed
  get isSaveDisabled(): boolean {
    return !this.draftTitle || !this.draftSlug || !this.draftExcerpt || !this.draftBody;
  }

  @action
  initDraft(notice?: Notice | null): void {
    if (notice) {
      this.draftTitle = notice.title;
      this.draftSlug = notice.slug;
      this.draftSlugManuallyEdited = true;
      this.draftCategory = notice.category;
      this.draftExcerpt = notice.excerpt ?? '';
      this.draftBody = notice.body ?? '';
      this.draftIsPinned = notice.isPinned ?? false;
      this.draftShowAsPopup = notice.showAsPopup ?? false;
      this.draftImages = notice.imageUrl ? [{ url: notice.imageUrl, publicId: notice.imagePublicId || '' }] : [];
    } else {
      this.draftTitle = '';
      this.draftSlug = '';
      this.draftSlugManuallyEdited = false;
      this.draftCategory = 'general';
      this.draftExcerpt = '';
      this.draftBody = '';
      this.draftIsPinned = false;
      this.draftShowAsPopup = false;
      this.draftImages = [];
    }
    this.draftFile = null;
  }

  @action
  setDraftTitle(title: string): void {
    this.draftTitle = title;
    if (!this.draftSlugManuallyEdited && this.drawerMode === 'create') {
      this.draftSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
  }

  @action
  setDraftSlug(slug: string): void {
    this.draftSlug = slug;
    this.draftSlugManuallyEdited = true;
  }

  @action setDraftCategory(cat: NoticeCategory): void { this.draftCategory = cat; }
  @action setDraftExcerpt(excerpt: string): void { this.draftExcerpt = excerpt; }
  @action setDraftBody(body: string): void { this.draftBody = body; }
  @action setDraftIsPinned(pinned: boolean): void { this.draftIsPinned = pinned; }
  @action setDraftShowAsPopup(show: boolean): void { this.draftShowAsPopup = show; }
  
  @action
  setDraftImages(images: { url: string; publicId: string }[]): void {
    this.draftImages = images;
    if (!images.some(r => r.publicId === 'pending')) {
      this.draftFile = null;
    }
  }

  setDraftFile(file: File | null): void {
    this.draftFile = file;
  }

  getFormData(): FormData {
    const fd = new FormData();
    fd.append('title', this.draftTitle);
    fd.append('slug', this.draftSlug);
    fd.append('category', this.draftCategory);
    fd.append('excerpt', this.draftExcerpt);
    fd.append('body', this.draftBody);
    fd.append('isPinned', String(this.draftIsPinned));
    fd.append('showAsPopup', String(this.draftShowAsPopup));

    if (this.draftImages.length === 0) {
      fd.append('removeImage', 'true');
    } else if (this.draftImages.some(img => img.publicId === 'pending') && this.draftFile) {
      fd.append('image', this.draftFile);
    }
    return fd;
  }
}
