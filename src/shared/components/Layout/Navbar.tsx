import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { layoutStore } from '../../stores/LayoutStore';
import dicvLogo from '../../../assets/dicv-logo.png';
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
} from './Navbar.styles';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Notice Board', path: '/notice-board' },
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
        <LogoContainer>
          <LogoImage src={dicvLogo} alt="DICV Logo" />
          <Box>
            <SchoolName variant="h2">DICV PUBLIC</SchoolName>
            <SchoolSubtitle variant="body2">HIGH SCHOOL</SchoolSubtitle>
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
            <LogoImage src={dicvLogo} alt="DICV Logo" sx={{ width: 40, height: 40 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.1, color: 'primary.main' }}>
                DICV PUBLIC
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.1em' }}>
                HIGH SCHOOL
              </Typography>
            </Box>
          </DrawerHeader>
          <List sx={{ pt: 1 }}>
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
          </List>
        </DrawerContainer>
      </Drawer>
    </>
  );
});
