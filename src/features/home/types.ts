import type { SvgIconComponent } from '@mui/icons-material';

export interface InfoItem {
  title: string;
  description: string;
  icon: SvgIconComponent;
}

export interface StatItem {
  label: string;
  value: string;
  icon: SvgIconComponent;
}
