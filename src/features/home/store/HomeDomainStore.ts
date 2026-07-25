import { observable, action, computed, runInAction } from 'mobx';
import type { InfoItem, StatItem } from '../types';
import type { Notice } from '../../../shared/api/apiTypes';
import { noticeService } from '../../notices/services/noticeService';
import type { HomeRootStore } from './HomeRootStore';
import { siteSettingsStore } from '../../../shared/stores/SiteSettingsStore';

import AutoStoriesIcon from '@mui/icons-material/AutoStories'; // Active Learning
import SupportAgentIcon from '@mui/icons-material/SupportAgent'; // Expert Teachers
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Holistic / Awards
import SecurityIcon from '@mui/icons-material/Security'; // Safe Environment
import DomainIcon from '@mui/icons-material/Domain'; // Modern Infrastructure
import PeopleIcon from '@mui/icons-material/People'; // Students
import SchoolIcon from '@mui/icons-material/School'; // Teachers
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Years

export class HomeDomainStore {
  rootStore: HomeRootStore;

  constructor(rootStore: HomeRootStore) {
    this.rootStore = rootStore;
  }


  @computed
  get latestNotices(): any[] {
    return this.rootStore.notices.domain.notices.slice(0, 3);
  }

  // Config for the strip overlapping the hero
  @observable accessor infoStripItems: InfoItem[] = [
    { title: 'Active Learning', description: 'Interactive and engaging classrooms for better understanding.', icon: AutoStoriesIcon },
    { title: 'Expert Teachers', description: 'Experienced and dedicated faculty to guide every student.', icon: SupportAgentIcon },
    { title: 'Holistic Development', description: 'Focus on academics, sports, culture and life skills.', icon: EmojiEventsIcon },
    { title: 'Safe Environment', description: 'A secure and caring campus that feels like a second home.', icon: SecurityIcon },
    { title: 'Modern Infrastructure', description: 'Well-equipped labs, library, and advanced facilities.', icon: DomainIcon },
  ];

  // Config for the blue stats strip
  @computed
  get statStripItems(): StatItem[] {
    const stats = siteSettingsStore.settings?.stats;
    return [
      { label: 'Students Enrolled', value: stats ? `${stats.studentsEnrolled}+` : '2500+', icon: PeopleIcon },
      { label: 'Classes', value: stats ? `${stats.classes}+` : '120+', icon: SchoolIcon },
      { label: 'Courses', value: stats ? `${stats.courses}+` : '25+', icon: MenuBookIcon },
      { label: 'Awards & Achievements', value: stats ? `${stats.awards}+` : '100+', icon: EmojiEventsIcon },
    ];
  }

  @observable accessor quotationText = `Education is the most powerful weapon which you can use to change the world.`;
  @observable accessor quotationAuthor = `- Nelson Mandela`;

  @observable accessor popupNotice: Notice | null = null;
  @observable accessor isNoticePopupOpen: boolean = false;

  @action
  setNoticePopupOpen(open: boolean): void {
    this.isNoticePopupOpen = open;
  }

  @action
  async fetchPopupNotice(): Promise<void> {
    const notice = await noticeService.getPopupNotice() as any as Notice | null;
    runInAction(() => {
      this.popupNotice = notice;
      if (notice) {
        // Check if user has dismissed it in this session
        const dismissed = sessionStorage.getItem(`dismissedNoticePopups_${notice.slug}`);
        if (!dismissed) {
          this.isNoticePopupOpen = true;
        }
      }
    });
  }
}
