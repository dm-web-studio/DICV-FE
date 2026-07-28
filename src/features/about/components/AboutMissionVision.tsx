import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import { useAboutStore } from '../store/AboutStoreContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {
  SectionWrapper,
  GridContainer,
  Eyebrow,
  SectionTitle,
  BodyText,
  AffilRow,
  AffilChip,
  StackContainer,
  Card,
  CardTop,
  CardIcon,
  DecorativeTitle,
  CardDesc,
} from './AboutMissionVision.styles';

export const AboutMissionVision = observer(() => {
  const { domain } = useAboutStore();

  return (
    <SectionWrapper>
      <GridContainer>
        <Box>
          <Eyebrow>Who we are</Eyebrow>
          <SectionTitle variant="h2">
            A campus built for focused, all-round learning
          </SectionTitle>
          <BodyText variant="body1">
            Situated on the outskirts of A-Zone township, our lush green campus stays away from city bustle, giving students a calm, academic environment. We combine qualitative physical and digital infrastructure to meet modern educational needs.
          </BodyText>
          <BodyText variant="body1">
            Beyond academics, we place equal focus on personality development, communication skills, discipline and responsibility — preparing every student to be a capable, grounded citizen.
          </BodyText>

          <AffilRow>
            {domain.affiliations.map(affil => (
              <AffilChip key={affil}>
                <CheckCircleIcon />
                {affil}
              </AffilChip>
            ))}
          </AffilRow>
        </Box>

        <StackContainer>
          <Card>
            <CardTop>
              <CardIcon>
                <RocketLaunchOutlinedIcon />
              </CardIcon>
              <DecorativeTitle variant="h3">
                Our Mission
              </DecorativeTitle>
            </CardTop>
            <CardDesc variant="body2">
              {domain.mission}
            </CardDesc>
          </Card>

          <Card>
            <CardTop>
              <CardIcon>
                <LightbulbOutlinedIcon />
              </CardIcon>
              <DecorativeTitle variant="h3">
                Our Vision
              </DecorativeTitle>
            </CardTop>
            <CardDesc variant="body2">
              {domain.vision}
            </CardDesc>
          </Card>
        </StackContainer>
      </GridContainer>
    </SectionWrapper>
  );
});
