import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';
import { useHomeStore } from '../store/HomeStoreContext';
import { 
  InfoStripContainer, 
  InfoCardWrapper, 
  InfoGrid, 
  InfoItemBox, 
  IconCircle,
  InfoItemTitle
} from './HomeInfoStrip.styles';

export const HomeInfoStrip = observer(function HomeInfoStrip() {
  const { domain } = useHomeStore();

  return (
    <InfoStripContainer>
      <InfoCardWrapper>
        <InfoGrid>
          {domain.infoStripItems.map((item, index) => {
            const IconComponent = item.icon;
            const isAlternate = index % 2 !== 0; // 0=primary, 1=secondary, 2=primary, etc.
            
            return (
              <InfoItemBox key={index}>
                <IconCircle $isAlternate={isAlternate}>
                  <IconComponent />
                </IconCircle>
                <InfoItemTitle 
                  variant="h2" 
                  $isAlternate={isAlternate}
                >
                  {item.title}
                </InfoItemTitle>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </InfoItemBox>
            );
          })}
        </InfoGrid>
      </InfoCardWrapper>
    </InfoStripContainer>
  );
});
