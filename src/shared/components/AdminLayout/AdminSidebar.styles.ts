import { styled } from '@mui/material/styles';
import { Box, List, ListItemButton, ListItemIcon, Typography, Divider } from '@mui/material';

const DRAWER_WIDTH = 260;
const COLLAPSED_DRAWER_WIDTH = 72;

export const NavItemText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  fontSize: 14,
  fontWeight: isActive ? 600 : 400,
}));

export const SidebarContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  width: isOpen ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH,
  flexShrink: 0,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

export const LogoHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  height: 64, // Matches AppBar standard height
  display: 'flex',
  alignItems: 'center',
  justifyContent: isOpen ? 'flex-start' : 'center',
  padding: isOpen ? theme.spacing(0, 3) : theme.spacing(0),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 18,
  color: theme.palette.primary.main,
}));

export const StyledList = styled(List)({
  padding: 0,
});

export const NavItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isOpen',
})<{ isActive: boolean; isOpen: boolean }>(({ theme, isActive, isOpen }) => ({
  minHeight: 48,
  justifyContent: isOpen ? 'initial' : 'center',
  padding: theme.spacing(1.5, 3),
  backgroundColor: isActive ? theme.badgeColors.blue.bg : 'transparent',
  color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
  borderRight: isActive ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent',
  '&:hover': {
    backgroundColor: isActive ? theme.badgeColors.blue.bg : theme.palette.action.hover,
  },
}));

export const NavItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isOpen',
})<{ isActive: boolean; isOpen: boolean }>(({ theme, isActive, isOpen }) => ({
  minWidth: 0,
  marginRight: isOpen ? theme.spacing(2) : 0,
  justifyContent: 'center',
  color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
}));

export const MainNavigationContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const BottomSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  marginTop: 'auto',
  paddingLeft: isOpen ? theme.spacing(2) : theme.spacing(1),
  paddingRight: isOpen ? theme.spacing(2) : theme.spacing(1),
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const ToggleContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: isOpen ? 'flex-end' : 'center',
}));
