import type { FC, ReactNode } from 'react';
import {
  EmptyStateContainer,
  IconWrapper,
  EmptyStateTitle,
  EmptyStateSubtext,
} from './GalleryEmptyState.styles';

interface GalleryEmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const GalleryEmptyState: FC<GalleryEmptyStateProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <EmptyStateContainer>
      <IconWrapper>{icon}</IconWrapper>
      <EmptyStateTitle variant="h2">{title}</EmptyStateTitle>
      <EmptyStateSubtext variant="body1">{description}</EmptyStateSubtext>
    </EmptyStateContainer>
  );
};
