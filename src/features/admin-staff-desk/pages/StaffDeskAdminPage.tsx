import { observer } from 'mobx-react-lite';
import { StaffDeskAdminStoreProvider } from '../store/StaffDeskAdminStoreContext';
import { StaffDeskAdminTable } from '../components/StaffDeskAdminTable';
import { StaffDeskFormDrawer } from '../components/StaffDeskFormDrawer';

import { PageLayout, MainContent } from '../../../shared/components/AdminTableLayout';

const StaffDeskAdminPageContent = observer(function StaffDeskAdminPageContent() {
  return (
    <PageLayout>
      <MainContent>
        <StaffDeskAdminTable />
      </MainContent>
      <StaffDeskFormDrawer />
    </PageLayout>
  );
});

export default function StaffDeskAdminPage() {
  return (
    <StaffDeskAdminStoreProvider>
      <StaffDeskAdminPageContent />
    </StaffDeskAdminStoreProvider>
  );
}
