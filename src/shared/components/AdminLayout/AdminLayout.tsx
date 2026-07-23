import { Outlet } from 'react-router-dom';
import { AdminLayoutStoreProvider } from './store/AdminLayoutStoreContext';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { SiteSettingsDrawer } from '../../../features/admin-site-settings/components/SiteSettingsDrawer';
import { LayoutRoot, MainContentArea, PageContent } from './AdminLayout.styles';

export function AdminLayout() {
  return (
    <AdminLayoutStoreProvider>
      <LayoutRoot>
        <AdminSidebar />
        <MainContentArea>
          <AdminHeader />
          <PageContent>
            <Outlet />
          </PageContent>
        </MainContentArea>
        <SiteSettingsDrawer />
      </LayoutRoot>
    </AdminLayoutStoreProvider>
  );
}
