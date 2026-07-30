import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { layoutStore } from '../../stores/LayoutStore';
import dicvLogo from '../../../assets/dicv-logo-vector.svg';
import {
  NavRow,
  LogoContainer,
  LogoImage,
  SchoolName,
  SchoolSubtitle,
  DesktopNav,
  StyledNavLink,
  MobileNavContainer,
  DrawerContainer,
  DrawerHeader,
  MobileNavLink,
  StyledListItemButton,
  CollapsibleText,
  ShowOnCollapseText,
  DrawerLogoImage,
  DrawerSchoolName,
  DrawerSchoolSubtitle,
  DrawerNavList,
} from './Navbar.styles';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Admissions', path: '/admission' },
  { label: 'Campus Life', path: '/gallery' },
  { label: 'Notice Board', path: '/notices' },
  { label: 'Contact Us', path: '/contact' },
];

export const Navbar = observer(function Navbar() {
  const handleDrawerToggle = () => {
    layoutStore.toggleMobileNav();
  };

  const handleCloseDrawer = () => {
    layoutStore.closeMobileNav();
  };

  return (
    <>
      <NavRow>
        <LogoContainer to="/">
          <LogoImage src={dicvLogo} alt="DICV Logo" />
          <Box>
            <SchoolName variant="h1">
              <CollapsibleText>Durgapur Iswar Chandra Vidyasagar (</CollapsibleText>DICV<CollapsibleText>)</CollapsibleText>
              <ShowOnCollapseText> PUBLIC</ShowOnCollapseText>
            </SchoolName>
            <SchoolSubtitle variant="body2">
              <CollapsibleText>PUBLIC&nbsp;</CollapsibleText>HIGH SCHOOL (H.S)
            </SchoolSubtitle>
          </Box>
        </LogoContainer>

        <DesktopNav>
          {NAV_LINKS.map((link) => (
            <StyledNavLink key={link.path} to={link.path}>
              {link.label}
            </StyledNavLink>
          ))}
        </DesktopNav>

        <MobileNavContainer>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </MobileNavContainer>
      </NavRow>

      <Drawer
        anchor="right"
        open={layoutStore.isMobileNavOpen}
        onClose={handleCloseDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <DrawerContainer onClick={handleCloseDrawer}>
          <DrawerHeader>
            <DrawerLogoImage src={dicvLogo} alt="DICV Logo" />
            <Box>
              <DrawerSchoolName variant="subtitle1">
                DICV PUBLIC
              </DrawerSchoolName>
              <DrawerSchoolSubtitle variant="caption">
                HIGH SCHOOL (H.S)
              </DrawerSchoolSubtitle>
            </Box>
          </DrawerHeader>
          <DrawerNavList>
            {NAV_LINKS.map((link) => (
              <ListItem key={link.path} disablePadding>
                <MobileNavLink to={link.path}>
                  <StyledListItemButton>
                    <ListItemText
                      primary={<Typography variant="body2" sx={{ fontWeight: 600 }}>{link.label}</Typography>}
                    />
                  </StyledListItemButton>
                </MobileNavLink>
              </ListItem>
            ))}
          </DrawerNavList>
        </DrawerContainer>
      </Drawer>
    </>
  );
});
