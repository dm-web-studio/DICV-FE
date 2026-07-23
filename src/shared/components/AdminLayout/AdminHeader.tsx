import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { 
  SettingsOutlined as SettingsIcon, 
  AccountCircleOutlined as UserIcon,
  DashboardOutlined as DashboardIcon,
  CampaignOutlined as NoticesIcon,
  PeopleAltOutlined as FacultyIcon,
  DeskOutlined as StaffDeskIcon,
  PhotoLibraryOutlined as GalleryIcon,
} from '@mui/icons-material';
import { useAdminLayoutStore } from './store/AdminLayoutStoreContext';
import { HeaderContainer, PageTitle, TitleGroup, IconWrapper, HeaderActions } from './AdminHeader.styles';

const getPageInfo = (pathname: string) => {
  if (pathname.startsWith('/admin/notices')) return { 
    title: 'Notices', 
    subtitle: 'Create, manage and publish notices for your school community.', 
    icon: <NoticesIcon /> 
  };
  if (pathname.startsWith('/admin/faculty')) return { 
    title: 'Faculty', 
    subtitle: 'Manage faculty profiles and their designations.', 
    icon: <FacultyIcon /> 
  };
  if (pathname.startsWith('/admin/staff-desk')) return { 
    title: 'Staff Desk', 
    subtitle: 'Manage messages from the Principal, President, and Vice Principal.', 
    icon: <StaffDeskIcon /> 
  };
  if (pathname.startsWith('/admin/gallery')) return { 
    title: 'Gallery', 
    subtitle: 'Manage photo albums and gallery images.', 
    icon: <GalleryIcon /> 
  };
  return { 
    title: 'Dashboard', 
    subtitle: "Overview of your school's data and activities.", 
    icon: <DashboardIcon /> 
  };
};

export const AdminHeader = observer(function AdminHeader() {
  const layoutStore = useAdminLayoutStore();
  const location = useLocation();

  const { title, subtitle, icon } = getPageInfo(location.pathname);

  return (
    <HeaderContainer>
      <TitleGroup>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <Box>
          <PageTitle variant="h2">{title}</PageTitle>
          <Typography variant="caption" color="text.secondary">{subtitle}</Typography>
        </Box>
      </TitleGroup>

      <HeaderActions>
        <Tooltip title="Site Settings">
          <IconButton onClick={() => layoutStore.openSettingsDrawer()}>
            <SettingsIcon />
          </IconButton>
        </Tooltip>
        
        <Tooltip title="Profile">
          <IconButton>
            <UserIcon />
          </IconButton>
        </Tooltip>
      </HeaderActions>
    </HeaderContainer>
  );
});
