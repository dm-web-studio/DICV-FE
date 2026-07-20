import facultyHeroImage from '../../../assets/faculty-hero.png';
import { HeroContainer, HeroImage } from './FacultyHero.styles';

export function FacultyHero() {
  return (
    <HeroContainer>
      <HeroImage src={facultyHeroImage} alt="Faculty Hero" />
    </HeroContainer>
  );
}
