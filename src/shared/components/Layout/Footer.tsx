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
import dicvLogo from '../../../assets/dicv-logo-vector.svg';

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
  FooterContainer,
  FooterGrid,
  ColumnContent,
  CollapsibleText,
  ShowOnCollapseText,
  BrandColumnContainer,
  LinkColumnContainer,
  ContactColumnContainer,
  ManagementText,
  AffiliationCodesContainer,
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
import { SCHOOL_OFFICIAL_DETAILS } from '../../constants/schoolConfig';

export const Footer = observer(function Footer(): React.JSX.Element {
  const { settings } = siteSettingsStore;

  // Provide safe fallbacks if settings hasn't loaded yet
  const address = settings?.address || 'Loading...';
  const phone = settings?.phone || 'Loading...';
  const email = settings?.email || 'Loading...';

  const getSocialUrl = (platform: string) => {
    return settings?.socialLinks?.find(l => l.platform.toLowerCase() === platform.toLowerCase())?.url;
  };

  const socialLinks = [
    { url: getSocialUrl('facebook'), icon: <FacebookIcon fontSize="small" />, label: 'Facebook' },
    { url: getSocialUrl('instagram'), icon: <InstagramIcon fontSize="small" />, label: 'Instagram' },
    { url: getSocialUrl('youtube'), icon: <YouTubeIcon fontSize="small" />, label: 'YouTube' },
    { url: getSocialUrl('twitter'), icon: <TwitterIcon fontSize="small" />, label: 'Twitter' },
  ].filter(link => link.url);

  const contactDetails = [
    { icon: <LocationOnIcon />, text: address },
    { icon: <PhoneIcon />, text: phone },
    { icon: <EmailIcon />, text: email },
    { icon: <AccessTimeIcon />, text: <>Mon - Sat: 8:00 AM - 2:00 PM<br />Sunday: Closed</> },
  ];

  return (
    <FooterRoot>
      <FooterContainer>
        <FooterGrid container spacing={{ xs: 3, md: 2, lg: 4 }}>
          {/* Column 1: Brand & Social */}
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <BrandColumnContainer>
              <ColumnContent>
                <Box>
                  <BrandContainer>
                    <LogoImage src={dicvLogo} alt="DICV Logo" />
                    <Box>
                      <BrandTitle variant="footerTitle">
                        <CollapsibleText>Durgapur Iswar Chandra Vidyasagar (</CollapsibleText>DICV<CollapsibleText>)</CollapsibleText>
                        <ShowOnCollapseText> PUBLIC</ShowOnCollapseText>
                      </BrandTitle>
                      <BrandSubtitle variant="footerTitle">
                        <CollapsibleText>PUBLIC&nbsp;</CollapsibleText>HIGH SCHOOL (H.S)
                      </BrandSubtitle>
                    </Box>
                  </BrandContainer>
                  <TaglineText variant="body2">
                    Excellence in Education Since 2005.<br />
                    Where Knowledge Inspires Character and Learning Creates Future Leaders.
                  </TaglineText>
                  
                  <ManagementText>
                    <Typography variant="inherit">
                      Organized and Managed by : {SCHOOL_OFFICIAL_DETAILS.management.organizedBy}
                    </Typography>
                    {SCHOOL_OFFICIAL_DETAILS.management.registrations.map((reg) => (
                      <Typography key={reg} variant="inherit" component="p">{reg}</Typography>
                    ))}
                  </ManagementText>
                </Box>
                <SocialStack direction="row" spacing={1.5}>
                  {socialLinks.map(({ url, icon, label }) => (
                    <a key={label} href={url} target="_blank" rel="noopener noreferrer">
                      <SocialIconButton aria-label={label}>
                        {icon}
                      </SocialIconButton>
                    </a>
                  ))}
                </SocialStack>
              </ColumnContent>
            </BrandColumnContainer>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid size={{ xs: 12, sm: 4, md: 2 }}>
            <LinkColumnContainer>
              <SectionHeading variant="h3">QUICK LINKS</SectionHeading>
              <Box>
                {QUICK_LINKS.map((link) => (
                  <FooterLink key={link.label} to={link.path}>
                    <QuickLinkIcon />
                    <Typography variant="body2">{link.label}</Typography>
                  </FooterLink>
                ))}
              </Box>
            </LinkColumnContainer>
          </Grid>

          {/* Column 3: Academics */}
          <Grid size={{ xs: 12, sm: 4, md: 2 }}>
            <LinkColumnContainer>
              <SectionHeading variant="h3">ACADEMICS</SectionHeading>
              <Box>
                {ACADEMIC_LINKS.map((link) => (
                  <FooterLink key={link.label} to={link.path}>
                    <QuickLinkIcon />
                    <Typography variant="body2">{link.label}</Typography>
                  </FooterLink>
                ))}
              </Box>
            </LinkColumnContainer>
          </Grid>

          {/* Column 4: Contact */}
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <ContactColumnContainer>
              <SectionHeading variant="h3">CONTACT US</SectionHeading>
              <Box>
                {contactDetails.map((contact, index) => (
                  <ContactRow key={index}>
                    <ContactIconWrapper>
                      {contact.icon}
                    </ContactIconWrapper>
                    <ContactText variant="body2">
                      {contact.text}
                    </ContactText>
                  </ContactRow>
                ))}
              </Box>
            </ContactColumnContainer>
          </Grid>
        </FooterGrid>

        <BottomBar>
          <AffiliationCodesContainer>
            {SCHOOL_OFFICIAL_DETAILS.codes.map((code) => (
              <Box key={code.label} className="code-item">
                <Typography variant="caption" className="label">{code.label}:</Typography>
                <Typography variant="caption">{code.value}</Typography>
              </Box>
            ))}
          </AffiliationCodesContainer>
          <FooterCaption variant="caption" sx={{ mt: { xs: 2, md: 0 }, display: 'block', textAlign: { xs: 'center', md: 'right' } }}>
            © {new Date().getFullYear()} Durgapur Iswar Chandra Vidyasagar (DICV) Public High School (H.S). All Rights Reserved.
          </FooterCaption>
        </BottomBar>
      </FooterContainer>
    </FooterRoot>
  );
});
