import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useNoticeAdminStore } from '../store/NoticeAdminStoreContext';
import { NoticeAdminStoreProvider } from '../store/NoticeAdminStoreContext';
import { NoticeAdminTable } from '../components/NoticeAdminTable';
import { NoticeFormDrawer } from '../components/NoticeFormDrawer';

import { PageLayout, MainContent } from '../../../shared/components/AdminTableLayout';

const NoticeAdminPageContent = observer(function NoticeAdminPageContent() {
  const { ui } = useNoticeAdminStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.openAdd) {
      ui.openDrawer('create');
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate, ui]);

  return (
    <PageLayout>
      <MainContent>
        <NoticeAdminTable />
      </MainContent>
      <NoticeFormDrawer />
    </PageLayout>
  );
});

export default function NoticeAdminPage() {
  return (
    <NoticeAdminStoreProvider>
      <NoticeAdminPageContent />
    </NoticeAdminStoreProvider>
  );
}
