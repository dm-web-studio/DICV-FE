import { observable } from 'mobx';
import type { StatItem, WhyChooseUsItem, SportItem, AchievementItem, FacultyItem } from '../types';

export class AboutDomainStore {
  @observable accessor stats: StatItem[] = [
    { value: '2005', label: 'Year established' },
    { value: '21+', label: 'Years of Experience' },
    { value: '2', label: 'Mediums of instruction' },
    { value: '6+', label: 'Sports disciplines' }
  ];

  @observable accessor affiliations: string[] = ['WBPSC', 'NIOS', 'English & Bengali medium'];

  @observable accessor mission: string = "To deliver quality academic and practical learning, continuously develop our faculty, and equip every student to become able, responsible individuals ready for the road ahead.";

  @observable accessor vision: string = "To build a hub of knowledge and real-world exposure that shapes students into well-rounded, responsible citizens who contribute to society.";

  @observable accessor whyChooseUs: WhyChooseUsItem[] = [
    { title: "Dual-medium curriculum", description: "English and Bengali medium classes under one roof, from primary to higher secondary." },
    { title: "Experienced faculty", description: "Teachers trained through ongoing development programmes to keep pace with modern education." },
    { title: "Green, calm campus", description: "A lush, quiet campus on the outskirts of A-Zone, built for focus and wellbeing." },
    { title: "Discipline & values", description: "A culture built on morality, responsibility and decency, alongside strong academics." }
  ];

  @observable accessor sports: SportItem[] = [
    { name: "Karate" },
    { name: "Football" },
    { name: "Cricket" },
    { name: "Athletics" }
  ];

  @observable accessor achievements: AchievementItem[] = [
    { title: "Inter-school sports champions", description: "District-level meet, Durgapur zone" },
    { title: "Consistent board results", description: "Strong pass rates across WBBSE & WBCHSE" },
    { title: "Active co-curricular record", description: "Regular participation in cultural & sports meets" }
  ];

  @observable accessor faculty: FacultyItem[] = [
    { name: "Anjali Sharma", title: "Principal", initials: "AS" },
    { name: "Ritesh Das", title: "Head of Sports & Athletics", initials: "RD" },
    { name: "Meena Kumari", title: "Head of Academics, Science", initials: "MK" }
  ];
}
