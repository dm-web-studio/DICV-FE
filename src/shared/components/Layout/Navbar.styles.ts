import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import { NavLink, Link } from 'react-router-dom';

export const NavRow = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.85),
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  padding: theme.spacing(2, 6),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)',
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.5, 3),
  },
}));

export const LogoContainer = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  textDecoration: 'none',
  color: 'inherit',
}));

export const LogoImage = styled('img')({
  width: 48,
  height: 48,
  objectFit: 'contain',
  flexShrink: 0,
});

export const CollapsibleText = styled('span')(({ theme }) => ({
  display: 'inline-block',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  verticalAlign: 'bottom',
  transition: 'max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-out',
  maxWidth: '500px',
  opacity: 1,
  [theme.breakpoints.down('lg')]: {
    maxWidth: 0,
    opacity: 0,
  },
}));

export const ShowOnCollapseText = styled('span')(({ theme }) => ({
  display: 'inline-block',
  overflow: 'hidden',
  whiteSpace: 'pre',
  verticalAlign: 'bottom',
  transition: 'max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-out',
  maxWidth: 0,
  opacity: 0,
  [theme.breakpoints.down('lg')]: {
    maxWidth: '100px',
    opacity: 1,
  },
}));

export const SchoolName = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  lineHeight: 1.1,
  fontWeight: 700,
  whiteSpace: 'nowrap',
  fontSize: '17px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

export const SchoolSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  letterSpacing: '0.15em',
  marginTop: theme.spacing(0.5),
  lineHeight: 1.1,
  whiteSpace: 'nowrap',
  fontSize: '11px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
  },
}));

export const DesktopNav = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(5), // Increased gap
  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(2), // Reduce gap on mid screens to make room for logo
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontWeight: 600, // h3 equivalent or a bit lighter
  fontSize: '14px', // theme.typography.body2.fontSize
  [theme.breakpoints.down('lg')]: {
    fontSize: '12px',
  },
  position: 'relative',
  paddingBottom: theme.spacing(0.75), // little more bottom
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    transform: 'scaleX(0)',
    height: '2px',
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    transformOrigin: 'bottom right',
    transition: 'transform 0.25s ease-out',
  },
  '&.active': {
    color: theme.palette.primary.main,
  },
  '&.active::after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left',
  },
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&:hover::after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left',
  },
}));

export const MobileNavContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
}));

export const DrawerContainer = styled(Box)(({ theme }) => ({
  width: 320,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
}));

export const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(3, 2),
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const DrawerLogoImage = styled('img')({
  width: 40,
  height: 40,
  objectFit: 'contain',
  flexShrink: 0,
});

export const DrawerSchoolName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  lineHeight: 1.2,
  color: theme.palette.primary.main,
  whiteSpace: 'nowrap',
  fontSize: '18px',
}));

export const DrawerSchoolSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  letterSpacing: '0.05em',
  whiteSpace: 'nowrap',
  fontSize: '11px',
}));

export const DrawerNavList = styled(List)(({ theme }) => ({
  paddingTop: theme.spacing(1),
}));

export const MobileNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  width: '100%',
  display: 'block',
  position: 'relative',
  '&.active': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
  '&.active::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    backgroundColor: theme.palette.primary.main,
  }
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    color: theme.palette.primary.main,
  },
}));
