import { observer } from 'mobx-react-lite';
import { useHomeStore } from '../store/HomeStoreContext';
import {
  StatsContainer,
  StatsGrid,
  StatBox,
  StatIconWrapper,
  StatNumberBox,
  StatLabel,
  StatValue,
} from './HomeStatsStrip.styles';

export const HomeStatsStrip = observer(function HomeStatsStrip() {
  const { domain } = useHomeStore();

  return (
    <StatsContainer>
      <StatsGrid>
        {domain.statStripItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <StatBox key={index}>
              <StatIconWrapper>
                <IconComponent strokeWidth={1} />
              </StatIconWrapper>
              <StatNumberBox>
                <StatValue variant="h1">
                  {item.value}
                </StatValue>
              </StatNumberBox>
              <StatLabel variant="body1">
                {item.label}
              </StatLabel>
            </StatBox>
          );
        })}
      </StatsGrid>
    </StatsContainer>
  );
});
