import { observer } from 'mobx-react-lite';
import { FacultyAdminStoreProvider } from '../store/FacultyAdminStoreContext';
import { FacultyAdminTable } from '../components/FacultyAdminTable';
import { FacultyFormDrawer } from '../components/FacultyFormDrawer';
import { PageLayout, MainContent } from '../../../shared/components/AdminTableLayout';

const FacultyAdminPageContent = observer(function FacultyAdminPageContent() {
  return (
    <PageLayout>
      <MainContent>
        <FacultyAdminTable />
      </MainContent>
      <FacultyFormDrawer />
    </PageLayout>
  );
});

export default function FacultyAdminPage() {
  return (
    <FacultyAdminStoreProvider>
      <FacultyAdminPageContent />
    </FacultyAdminStoreProvider>
  );
}
