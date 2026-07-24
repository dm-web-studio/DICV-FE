import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useFacultyAdminStore } from '../store/FacultyAdminStoreContext';
import { FacultyAdminStoreProvider } from '../store/FacultyAdminStoreContext';
import { FacultyAdminTable } from '../components/FacultyAdminTable';
import { FacultyFormDrawer } from '../components/FacultyFormDrawer';

import { PageLayout, MainContent } from '../../../shared/components/AdminTableLayout';

const FacultyAdminPageContent = observer(function FacultyAdminPageContent() {
  const { ui } = useFacultyAdminStore();
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
