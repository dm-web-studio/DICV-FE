import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import { HeroContainer, Underline, HeroText } from './ContactHero.styles';

export const ContactHero: FC = () => {
  return (
    <HeroContainer>
      <Typography variant="heroTitle" color="primary">
        GET IN TOUCH
      </Typography>
      <Underline />
      <HeroText variant="body1" color="text.secondary">
        We'd love to hear from you. Reach out to us for any queries, feedback,
        or more information about DICV Public High School.
      </HeroText>
    </HeroContainer>
  );
};
