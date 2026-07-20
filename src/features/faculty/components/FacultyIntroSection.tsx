import { IntroContainer, Eyebrow, Heading, Subtext } from './FacultyIntroSection.styles';

export function FacultyIntroSection() {
  return (
    <IntroContainer>
      <Eyebrow variant="caption">Our Faculty</Eyebrow>
      <Heading variant="heroTitle">Meet Our Educators</Heading>
      <Subtext variant="body1">
        Dedicated professionals committed to fostering an environment of academic excellence and holistic development.
      </Subtext>
    </IntroContainer>
  );
}
