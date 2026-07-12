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
  { label: "Principal's Desk", path: '/principals-desk' },
  { label: "President's Desk", path: '/presidents-desk' },
  { label: "Vice Principal's Desk", path: '/vice-principals-desk' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Notice Board', path: '/notice-board' },
];

const ACADEMIC_LINKS = [
  { label: 'Admission Procedure', path: '/admission-procedure' },
  { label: 'Fees Structure', path: '/fees' },
  { label: 'Holidays', path: '/holidays' },
  { label: 'Annual Examination', path: '/annual-exam' },
  { label: 'Half-Yearly Examination', path: '/half-yearly-exam' },
];

export function Footer(): React.JSX.Element {
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
                  <SocialIconButton aria-label="Facebook">
                    <FacebookIcon fontSize="small" />
                  </SocialIconButton>
                  <SocialIconButton aria-label="Instagram">
                    <InstagramIcon fontSize="small" />
                  </SocialIconButton>
                  <SocialIconButton aria-label="YouTube">
                    <YouTubeIcon fontSize="small" />
                  </SocialIconButton>
                  <SocialIconButton aria-label="Twitter">
                    <TwitterIcon fontSize="small" />
                  </SocialIconButton>
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
                    School Rd, A-Zone, Durgapur, West Bengal 713204
                  </ContactText>
                </ContactRow>
                <ContactRow>
                  <ContactIconWrapper>
                    <PhoneIcon />
                  </ContactIconWrapper>
                  <ContactText variant="body2">
                    +91-94751 51236
                  </ContactText>
                </ContactRow>
                <ContactRow>
                  <ContactIconWrapper>
                    <EmailIcon />
                  </ContactIconWrapper>
                  <ContactText variant="body2">
                    dicvpublicschool@gmail.com
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
}

