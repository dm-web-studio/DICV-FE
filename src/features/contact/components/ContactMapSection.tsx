import { observer } from 'mobx-react-lite';
import Skeleton from '@mui/material/Skeleton';
import { siteSettingsStore } from '../../../shared/stores/SiteSettingsStore';
import { MapContainer } from './ContactMapSection.styles';

export const ContactMapSection = observer(function ContactMapSection() {
  const { settings } = siteSettingsStore;

  if (!settings) {
    return (
      <MapContainer>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </MapContainer>
    );
  }

  const { schoolName } = settings;
  const mapQuery = "Durgapur Iswar Chandra Vidyasagar Public High School Rd, A-Zone, Durgapur, West Bengal 713204";
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

  return (
    <MapContainer>
      <iframe
        title={`${schoolName} Location Map`}
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </MapContainer>
  );
});
