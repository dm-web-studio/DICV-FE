import { HomeDomainStore } from './HomeDomainStore';
import { StaffDeskRootStore } from '../../staff-desk/store/StaffDeskRootStore';
import { NoticeRootStore } from '../../notices/store/NoticeRootStore';
import { GalleryRootStore } from '../../gallery/store/GalleryRootStore';

export class HomeRootStore {
  domain: HomeDomainStore;
  staffDesk: StaffDeskRootStore;
  notices: NoticeRootStore;
  gallery: GalleryRootStore;

  isDisposed = false;

  constructor() {
    this.domain = new HomeDomainStore(this);
    this.staffDesk = new StaffDeskRootStore();
    this.notices = new NoticeRootStore();
    this.gallery = new GalleryRootStore();

    // Fetch initial data needed for home page
    void this.staffDesk.domain.fetchByType('principal');
    // NoticeRootStore automatically fetches on init via its UI store defaults
    void this.gallery.domain.fetchHighlights();
    void this.domain.fetchPopupNotice();
  }

  dispose(): void {
    this.staffDesk.dispose();
    this.notices.dispose();
    this.gallery.dispose();
    this.isDisposed = true;
  }
}
