import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import { useAboutStore } from '../store/AboutStoreContext';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { STATS_ICONS } from '../constants';
import {
  StripContainer,
  StatBox,
  IconWrapper,
  StatTextWrapper,
  StatValue,
  StatLabel,
} from './AboutStats.styles';

export const AboutStats = observer(() => {
  const { domain } = useAboutStore();

  return (
    <Box>
      <StripContainer>
        {domain.stats.map((stat, index) => (
          <StatBox key={stat.label}>
            <IconWrapper colorType={index % 2 === 0 ? 'primary' : 'secondary'}>
              {STATS_ICONS[stat.label] || <EventAvailableIcon />}
            </IconWrapper>
            <StatTextWrapper>
              <StatValue variant="h2">
                {stat.value}
              </StatValue>
              <StatLabel variant="body1">
                {stat.label}
              </StatLabel>
            </StatTextWrapper>
          </StatBox>
        ))}
      </StripContainer>
    </Box>
  );
});
