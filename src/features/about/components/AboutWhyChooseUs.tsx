import { observer } from 'mobx-react-lite';
import { useAboutStore } from '../store/AboutStoreContext';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { WHY_CHOOSE_US_ICONS } from '../constants';
import {
  SectionWrapper,
  SectionHead,
  Eyebrow,
  SectionTitle,
  GridContainer,
  Card,
  CardIcon,
  CardTitle,
  CardDesc,
} from './AboutWhyChooseUs.styles';

export const AboutWhyChooseUs = observer(() => {
  const { domain } = useAboutStore();

  return (
    <SectionWrapper>
      <SectionHead>
        <Eyebrow>Why families choose us</Eyebrow>
        <SectionTitle variant="h2">
          Everything a growing student needs, in one place
        </SectionTitle>
      </SectionHead>
      
      <GridContainer>
        {domain.whyChooseUs.map((item, index) => (
          <Card key={item.title}>
            <CardIcon colorType={index % 2 === 0 ? 'primary' : 'secondary'}>
              {WHY_CHOOSE_US_ICONS[item.title] || <WorkspacePremiumIcon />}
            </CardIcon>
            <CardTitle variant="h3">
              {item.title}
            </CardTitle>
            <CardDesc variant="body2">
              {item.description}
            </CardDesc>
          </Card>
        ))}
      </GridContainer>
    </SectionWrapper>
  );
});
