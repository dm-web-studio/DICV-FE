import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { QuickLinksContainer, ListHeader, ListTitle } from './DashboardAdminPage.styles';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { useTheme } from '@mui/material/styles';
import { useAdminLayoutStore } from '../../../shared/components/AdminLayout/store/AdminLayoutStoreContext';
import { TileGrid, ActionTile } from './QuickLinksWidget.styles';

export const QuickLinksWidget: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const layoutStore = useAdminLayoutStore();

  const handleNavigate = (path: string) => {
    layoutStore.setSidebarOpen(false);
    navigate(path, { state: { openAdd: true } });
  };

  return (
    <QuickLinksContainer>
      <ListHeader>
        <ListTitle>Quick Actions</ListTitle>
      </ListHeader>
      
      <TileGrid>
        <ActionTile 
          bgColor={theme.badgeColors.green.bg}
          textColor={theme.badgeColors.green.text}
          onClick={() => handleNavigate('/admin/notices')}
        >
          <div className="icon-wrapper">
            <CampaignOutlinedIcon />
          </div>
          <Typography className="action-text">Publish<br/>Notice</Typography>
        </ActionTile>
        
        <ActionTile 
          bgColor={theme.badgeColors.blue.bg}
          textColor={theme.badgeColors.blue.text}
          onClick={() => handleNavigate('/admin/faculty')}
        >
          <div className="icon-wrapper">
            <PersonAddOutlinedIcon />
          </div>
          <Typography className="action-text">Onboard<br/>Faculty</Typography>
        </ActionTile>
        
        <ActionTile 
          bgColor={theme.badgeColors.purple.bg}
          textColor={theme.badgeColors.purple.text}
          onClick={() => handleNavigate('/admin/gallery')}
        >
          <div className="icon-wrapper">
            <AddPhotoAlternateOutlinedIcon />
          </div>
          <Typography className="action-text">Create<br/>Album</Typography>
        </ActionTile>
      </TileGrid>
    </QuickLinksContainer>
  );
};
