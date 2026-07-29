import type { ReactNode } from 'react';
import { EmptyStateContainer, EmptyStateTitle, EmptyStateDescription } from './EmptyState.styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function EmptyState({ 
  icon = <InfoOutlinedIcon />, 
  title, 
  description,
  className 
}: EmptyStateProps) {
  return (
    <EmptyStateContainer className={className}>
      {icon}
      <EmptyStateTitle>{title}</EmptyStateTitle>
      {description && <EmptyStateDescription>{description}</EmptyStateDescription>}
    </EmptyStateContainer>
  );
}
