import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import { useAboutStore } from '../store/AboutStoreContext';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { SPORTS_ICONS } from '../constants';
import {
  SectionWrapper,
  SportsPanel,
  SectionTitle,
  SectionDesc,
  ChipsGrid,
  SportChip,
} from './AboutSports.styles';

export const AboutSports = observer(() => {
  const { domain } = useAboutStore();

  return (
    <SectionWrapper>
      <SportsPanel>
        <Box>
          <SectionTitle variant="h2">
            Sports we offer
          </SectionTitle>
          <SectionDesc variant="body2">
            Physical development sits alongside academics — building discipline, teamwork and confidence on the field.
          </SectionDesc>
        </Box>
        <ChipsGrid>
          {domain.sports.map((sport) => (
            <SportChip key={sport.name}>
              {SPORTS_ICONS[sport.name] || <DirectionsRunIcon />}
              <span>{sport.name}</span>
            </SportChip>
          ))}
        </ChipsGrid>
      </SportsPanel>
    </SectionWrapper>
  );
});
