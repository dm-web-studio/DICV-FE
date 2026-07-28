import { AboutDomainStore } from './AboutDomainStore';
import { FacultyRootStore } from '../../faculty/store/FacultyRootStore';

export class AboutRootStore {
  domain: AboutDomainStore;
  faculty: FacultyRootStore;

  constructor() {
    this.faculty = new FacultyRootStore();
    this.domain = new AboutDomainStore(this);
    
    // Fetch top leadership faculty for the achievements/faculty section
    void this.faculty.domain.fetchLeadership();
  }

  dispose(): void {
    // cleanup
  }
}
