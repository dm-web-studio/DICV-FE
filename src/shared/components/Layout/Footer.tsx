import type * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import dicvLogo from '../../../assets/dicv-logo.png';

import {
  FooterRoot,
  SocialIconButton,
  SectionHeading,
  FooterLink,
  ContactRow,
  ContactIconWrapper,
  ContactText,
  BottomBar,
  LogoImage,
  BrandContainer,
  BrandTitle,
  BrandSubtitle,
  SocialStack,
  QuickLinkIcon,
  TaglineText,
  FooterCaption,
  ColumnDivider,
  FooterContainer,
  FooterGrid,
  ColumnContent,
} from './Footer.styles';

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Campus Life', path: '/gallery' },
  { label: 'Notice Board', path: '/notices' },
];

const ACADEMIC_LINKS = [
  { label: 'Admission Procedure', path: '/admission' },
  { label: "Principal's Desk", path: '/principals-desk' },
  { label: "President's Desk", path: '/presidents-desk' },
  { label: "Vice Principal's Desk", path: '/vice-principals-desk' },
];

import { observer } from 'mobx-react-lite';
import { siteSettingsStore } from '../../stores/SiteSettingsStore';

export const Footer = observer(function Footer(): React.JSX.Element {
  const { settings } = siteSettingsStore;
  
  // Provide safe fallbacks if settings hasn't loaded yet
  const address = settings?.address || 'Loading...';
  const phone = settings?.phone || 'Loading...';
  const email = settings?.email || 'Loading...';

  const getSocialUrl = (platform: string) => {
    return settings?.socialLinks?.find(l => l.platform.toLowerCase() === platform.toLowerCase())?.url;
  };

  const fbUrl = getSocialUrl('facebook');
  const igUrl = getSocialUrl('instagram');
  const ytUrl = getSocialUrl('youtube');
  const twUrl = getSocialUrl('twitter');

  return (
    <FooterRoot>
      <FooterContainer>
        <FooterGrid container spacing={{ xs: 3, md: 2, lg: 4 }}>
          {/* Column 1: Brand & Social */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ColumnDivider>
              <ColumnContent>
                <Box>
                  <BrandContainer>
                    <LogoImage src={dicvLogo} alt="DICV Logo" />
                    <Box>
                      <BrandTitle variant="footerTitle">
                        DICV PUBLIC
                      </BrandTitle>
                      <BrandSubtitle variant="footerTitle">
                        HIGH SCHOOL
                      </BrandSubtitle>
                    </Box>
                  </BrandContainer>
                  <TaglineText variant="body2">
                    Excellence in Education Since 2005.<br />
                    Where Knowledge Inspires Character and Learning Creates Future Leaders.
                  </TaglineText>
                </Box>
                <SocialStack direction="row" spacing={1.5}>
                  {fbUrl && (
                    <a href={fbUrl} target="_blank" rel="noopener noreferrer">
                      <SocialIconButton aria-label="Facebook">
                        <FacebookIcon fontSize="small" />
                      </SocialIconButton>
                    </a>
                  )}
                  {igUrl && (
                    <a href={igUrl} target="_blank" rel="noopener noreferrer">
                      <SocialIconButton aria-label="Instagram">
                        <InstagramIcon fontSize="small" />
                      </SocialIconButton>
                    </a>
                  )}
                  {ytUrl && (
                    <a href={ytUrl} target="_blank" rel="noopener noreferrer">
                      <SocialIconButton aria-label="YouTube">
                        <YouTubeIcon fontSize="small" />
                      </SocialIconButton>
                    </a>
                  )}
                  {twUrl && (
                    <a href={twUrl} target="_blank" rel="noopener noreferrer">
                      <SocialIconButton aria-label="Twitter">
                        <TwitterIcon fontSize="small" />
                      </SocialIconButton>
                    </a>
                  )}
                </SocialStack>
              </ColumnContent>
            </ColumnDivider>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ColumnDivider>
              <SectionHeading variant="h3">QUICK LINKS</SectionHeading>
              <Box>
                {QUICK_LINKS.map((link) => (
                  <FooterLink key={link.label} to={link.path}>
                    <QuickLinkIcon />
                    <Typography variant="body2">{link.label}</Typography>
                  </FooterLink>
                ))}
              </Box>
            </ColumnDivider>
          </Grid>

          {/* Column 3: Academics */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ColumnDivider>
              <SectionHeading variant="h3">ACADEMICS</SectionHeading>
              <Box>
                {ACADEMIC_LINKS.map((link) => (
                  <FooterLink key={link.label} to={link.path}>
                    <QuickLinkIcon />
                    <Typography variant="body2">{link.label}</Typography>
                  </FooterLink>
                ))}
              </Box>
            </ColumnDivider>
          </Grid>

          {/* Column 4: Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ColumnDivider isLast>
              <SectionHeading variant="h3">CONTACT US</SectionHeading>
              <Box>
                <ContactRow>
                  <ContactIconWrapper>
                    <LocationOnIcon />
                  </ContactIconWrapper>
                  <ContactText variant="body2">
                    {address}
                  </ContactText>
                </ContactRow>
                <ContactRow>
                  <ContactIconWrapper>
                    <PhoneIcon />
                  </ContactIconWrapper>
                  <ContactText variant="body2">
                    {phone}
                  </ContactText>
                </ContactRow>
                <ContactRow>
                  <ContactIconWrapper>
                    <EmailIcon />
                  </ContactIconWrapper>
                  <ContactText variant="body2">
                    {email}
                  </ContactText>
                </ContactRow>
                <ContactRow>
                  <ContactIconWrapper>
                    <AccessTimeIcon />
                  </ContactIconWrapper>
                  <ContactText variant="body2">
                    Mon - Sat: 8:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </ContactText>
                </ContactRow>
              </Box>
            </ColumnDivider>
          </Grid>
        </FooterGrid>

        <BottomBar>
          <FooterCaption variant="caption">
            © {new Date().getFullYear()} DICV Public High School. All Rights Reserved.
          </FooterCaption>
          <FooterCaption variant="caption">
            Made with ❤️ for Education
          </FooterCaption>
        </BottomBar>
      </FooterContainer>
    </FooterRoot>
  );
});
