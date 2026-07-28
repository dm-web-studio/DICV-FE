import { AdminContactStoreProvider } from '../store/AdminContactStoreContext';
import { AdminContactPageContent } from '../components/AdminContactPageContent';
import { PageLayout, MainContent } from '../../../shared/components/AdminTableLayout';

export default function AdminContactPage() {
  return (
    <AdminContactStoreProvider>
      <PageLayout>
        <MainContent>
          <AdminContactPageContent />
        </MainContent>
      </PageLayout>
    </AdminContactStoreProvider>
  );
}
