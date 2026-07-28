import React from 'react';
import type { NoticeCategory } from '../../api/apiTypes';
import { NOTICE_CATEGORY_LABELS } from '../../api/apiTypes';
import { StyledBadge, type BadgeColor } from './NoticeCategoryBadge.styles';

interface NoticeCategoryBadgeProps {
  category: NoticeCategory | string;
  className?: string;
}

const CATEGORY_COLOR_MAP: Record<NoticeCategory | string, BadgeColor> = {
  admission: 'blue',
  examination: 'indigo',
  holiday: 'orange',
  circular: 'teal',
  event: 'purple',
  result: 'green',
  scholarship: 'pink',
  tender: 'cyan',
  general: 'blue',
};

export const NoticeCategoryBadge: React.FC<NoticeCategoryBadgeProps> = ({ category, className }) => {
  const label = NOTICE_CATEGORY_LABELS[category as NoticeCategory] || category;
  const badgeColor = CATEGORY_COLOR_MAP[category] || 'blue';

  return (
    <StyledBadge
      label={label}
      size="small"
      badgeColor={badgeColor}
      className={className}
    />
  );
};
