import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import { useAboutStore } from '../store/AboutStoreContext';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import { ACHIEVEMENT_ICONS } from '../constants';
import {
  SectionWrapper,
  SectionHead,
  Eyebrow,
  SectionTitle,
  GridContainer,
  Card,
  CardTop,
  DecorativeTitle,
  CardHeaderIcon,
  Row,
  Dot,
  RowTitle,
  RowDesc,
  ActionLink,
} from './AboutAchievementsFaculty.styles';

export const AboutAchievementsFaculty = observer(() => {
  const { domain } = useAboutStore();

  return (
    <SectionWrapper>
      <SectionHead>
        <Eyebrow>Recognition &amp; people</Eyebrow>
        <SectionTitle variant="h2" color="primary">
          Achievements and the team behind them
        </SectionTitle>
      </SectionHead>

      <GridContainer>
        <Card>
          <CardTop>
            <DecorativeTitle variant="h3">Our Achievements</DecorativeTitle>
            <CardHeaderIcon isGold>
              <EmojiEventsOutlinedIcon />
            </CardHeaderIcon>
          </CardTop>
          {domain.achievements.map((item) => (
            <Row key={item.title}>
              <Dot className="row-dot">
                {ACHIEVEMENT_ICONS[item.title] || <EmojiEventsOutlinedIcon />}
              </Dot>
              <Box>
                <RowTitle variant="body1">
                  {item.title}
                </RowTitle>
                <RowDesc variant="body2">
                  {item.description}
                </RowDesc>
              </Box>
            </Row>
          ))}
          <ActionLink>View all achievements →</ActionLink>
        </Card>

        <Card>
          <CardTop>
            <DecorativeTitle variant="h3">Meet Our Faculty</DecorativeTitle>
            <CardHeaderIcon>
              <PeopleOutlinedIcon />
            </CardHeaderIcon>
          </CardTop>
          {domain.faculty.map((member) => (
            <Row key={member.name}>
              <Dot className="row-dot">{member.initials}</Dot>
              <Box>
                <RowTitle variant="body1">
                  {member.name}
                </RowTitle>
                <RowDesc variant="body2">
                  {member.title}
                </RowDesc>
              </Box>
            </Row>
          ))}
          <ActionLink>View full faculty →</ActionLink>
        </Card>
      </GridContainer>
    </SectionWrapper>
  );
});
