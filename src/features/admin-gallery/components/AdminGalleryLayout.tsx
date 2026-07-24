import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useAdminGalleryStore } from '../store/AdminGalleryStoreContext';
import { AlbumListPanel } from './AlbumListPanel';
import { AlbumDetailPanel } from './AlbumDetailPanel';
import { AlbumPhotosPanel } from './AlbumPhotosPanel';
import { AlbumDialogs } from './AlbumDialogs';

import { 
  LayoutRoot, 
  LayoutGrid, 
  SidebarContainer, 
  MainContentContainer, 
  DetailPanelWrapper, 
  PhotosPanelWrapper 
} from './AdminGalleryLayout.styles';

export const AdminGalleryLayout = observer(function AdminGalleryLayout() {
  const { ui } = useAdminGalleryStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.openAdd) {
      ui.openAddAlbumDialog();
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate, ui]);

  return (
    <LayoutRoot>
      <LayoutGrid container spacing={3}>
        {/* Left Panel */}
        <SidebarContainer size={{ xs: 12, md: 4, lg: 3 }}>
          <AlbumListPanel />
        </SidebarContainer>
        
        {/* Right Panels */}
        <MainContentContainer size={{ xs: 12, md: 8, lg: 9 }}>
          <DetailPanelWrapper>
            <AlbumDetailPanel />
          </DetailPanelWrapper>
          <PhotosPanelWrapper>
            <AlbumPhotosPanel />
          </PhotosPanelWrapper>
        </MainContentContainer>
      </LayoutGrid>
      <AlbumDialogs />
    </LayoutRoot>
  );
});
