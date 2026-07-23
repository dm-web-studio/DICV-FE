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

export function AdminGalleryLayout() {
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
}
