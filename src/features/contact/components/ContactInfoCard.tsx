import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { siteSettingsStore } from '../../../shared/stores/SiteSettingsStore';
import {
  InfoCardRoot,
  InfoRow,
  IconWrapper,
  Divider,
  CardSkeleton,
  ContentWrapper,
  SectionTitle,
  InfoStack,
  InfoLabel,
  InfoText,
  VisitButton,
  ButtonIcon,
} from './ContactInfoCard.styles';

export const ContactInfoCard = observer(function ContactInfoCard() {
  const { settings } = siteSettingsStore;

  if (!settings) {
    return (
      <InfoCardRoot>
        <CardSkeleton variant="rectangular" width="100%" height={400} />
      </InfoCardRoot>
    );
  }

  const { address, phone, email } = settings;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <InfoCardRoot>
      <ContentWrapper>
        <SectionTitle variant="h2">
          CONTACT INFORMATION
        </SectionTitle>
        <Divider />

        <InfoStack spacing={6}>
          <InfoRow>
            <IconWrapper>
              <LocationOnIcon />
            </IconWrapper>
            <Box>
              <InfoLabel variant="body1" gutterBottom>
                Address
              </InfoLabel>
              <InfoText variant="body2">
                DICV Public High School<br />
                {address}
              </InfoText>
            </Box>
          </InfoRow>

          <InfoRow>
            <IconWrapper>
              <PhoneIcon />
            </IconWrapper>
            <Box>
              <InfoLabel variant="body1" gutterBottom>
                Phone
              </InfoLabel>
              <InfoText variant="body2">
                {phone}
              </InfoText>
            </Box>
          </InfoRow>

          <InfoRow>
            <IconWrapper>
              <EmailIcon />
            </IconWrapper>
            <Box>
              <InfoLabel variant="body1" gutterBottom>
                Email
              </InfoLabel>
              <InfoText variant="body2">
                {email}
              </InfoText>
            </Box>
          </InfoRow>

          <InfoRow>
            <IconWrapper>
              <AccessTimeIcon />
            </IconWrapper>
            <Box>
              <InfoLabel variant="body1" gutterBottom>
                Office Hours
              </InfoLabel>
              <InfoText variant="body2">
                Mon - Sat: 9:00 AM - 4:00 PM<br />
                Sunday: Closed
              </InfoText>
            </Box>
          </InfoRow>
        </InfoStack>

        <VisitButton
          variant="outlined"
          color="inherit"
          endIcon={<ButtonIcon />}
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT OUR CAMPUS
        </VisitButton>
      </ContentWrapper>
    </InfoCardRoot>
  );
});
