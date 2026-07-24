import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Tooltip,
  ListItem,
  ListItemText,
  IconButton
} from '@mui/material';
import {
  DashboardOutlined as DashboardIcon,
  CampaignOutlined as NoticesIcon,
  PeopleAltOutlined as FacultyIcon,
  DeskOutlined as StaffDeskIcon,
  PhotoLibraryOutlined as GalleryIcon,
  EmailOutlined as EmailIcon,
  PublicOutlined as PublicSiteIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';
import { useAdminLayoutStore } from './store/AdminLayoutStoreContext';
import { 
  SidebarContainer, 
  LogoHeader, 
  LogoText, 
  StyledList, 
  NavItemButton, 
  NavItemIcon,
  NavItemText,
  MainNavigationContainer,
  BottomSection,
  StyledDivider,
  ToggleContainer
} from './AdminSidebar.styles';

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/admin', icon: <DashboardIcon /> },
  { label: 'Notices', path: '/admin/notices', icon: <NoticesIcon /> },
  { label: 'Faculty', path: '/admin/faculty', icon: <FacultyIcon /> },
  { label: 'Staff Desk', path: '/admin/staff-desk', icon: <StaffDeskIcon /> },
  { label: 'Gallery', path: '/admin/gallery', icon: <GalleryIcon /> },
  { label: 'Contacts', path: '/admin/contacts', icon: <EmailIcon /> },
];

export const AdminSidebar = observer(function AdminSidebar() {
  const layoutStore = useAdminLayoutStore();
  const location = useLocation();
  const navigate = useNavigate();

  const isOpen = layoutStore.isSidebarOpen;

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <LogoHeader isOpen={isOpen}>
        {isOpen ? (
          <LogoText>DICV Admin</LogoText>
        ) : (
          <LogoText>DA</LogoText>
        )}
      </LogoHeader>

      <MainNavigationContainer>
        <StyledList>
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== '/admin' && location.pathname.startsWith(item.path));

            const buttonContent = (
              <NavItemButton 
                isActive={isActive} 
                isOpen={isOpen}
                onClick={() => handleNavigate(item.path)}
              >
                <NavItemIcon isActive={isActive} isOpen={isOpen}>
                  {item.icon}
                </NavItemIcon>
                {isOpen && <ListItemText primary={<NavItemText isActive={isActive}>{item.label}</NavItemText>} />}
              </NavItemButton>
            );

            return (
              <ListItem key={item.path} disablePadding>
                {isOpen ? buttonContent : (
                  <Tooltip title={item.label} placement="right">
                    {buttonContent}
                  </Tooltip>
                )}
              </ListItem>
            );
          })}
        </StyledList>

        <BottomSection isOpen={isOpen}>
          <StyledDivider />
          <ListItem disablePadding>
            {isOpen ? (
              <NavItemButton isActive={false} isOpen={isOpen} onClick={() => handleNavigate('/')}>
                <NavItemIcon isActive={false} isOpen={isOpen}>
                  <PublicSiteIcon />
                </NavItemIcon>
                <ListItemText primary={<NavItemText isActive={false}>View Public Site</NavItemText>} />
              </NavItemButton>
            ) : (
              <Tooltip title="View Public Site" placement="right">
                <NavItemButton isActive={false} isOpen={isOpen} onClick={() => handleNavigate('/')}>
                  <NavItemIcon isActive={false} isOpen={isOpen}>
                    <PublicSiteIcon />
                  </NavItemIcon>
                </NavItemButton>
              </Tooltip>
            )}
          </ListItem>
        </BottomSection>
      </MainNavigationContainer>

      {/* Collapse Toggle */}
      <ToggleContainer isOpen={isOpen}>
        <IconButton onClick={() => layoutStore.toggleSidebar()} size="small">
          {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </ToggleContainer>
    </SidebarContainer>
  );
});
