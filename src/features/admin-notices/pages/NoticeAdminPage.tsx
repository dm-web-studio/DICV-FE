import { observer } from 'mobx-react-lite';
import { NoticeAdminStoreProvider } from '../store/NoticeAdminStoreContext';
import { NoticeAdminTable } from '../components/NoticeAdminTable';
import { NoticeFormDrawer } from '../components/NoticeFormDrawer';

import { PageLayout, MainContent } from '../../../shared/components/AdminTableLayout';

const NoticeAdminPageContent = observer(function NoticeAdminPageContent() {
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
