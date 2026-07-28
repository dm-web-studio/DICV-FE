import { observer } from 'mobx-react-lite';
import { ContactViewModal } from './ContactViewModal';
import { ContactDeleteModal } from './ContactDeleteModal';
import { useAdminContactStore } from '../store/AdminContactStoreContext';
import { useContactTableColumns } from './ContactTableColumns';
import {
  PageContainer,
  TableWrapper,
  TableCard,
  StyledDataTable
} from '../../../shared/components/AdminTableLayout/AdminTableLayout.styles';

export const AdminContactPageContent = observer(function AdminContactPageContent() {
  const { ui, domain } = useAdminContactStore();
  const columns = useContactTableColumns();

  const handlePaginationModelChange = (model: { page: number; pageSize: number }) => {
    if (ui.pageSize !== model.pageSize) {
      ui.setPageSize(model.pageSize);
    } else if (ui.page !== model.page + 1) {
      ui.setPage(model.page + 1);
    }
  };

  return (
    <PageContainer>
      <TableWrapper>
        <TableCard>
          <StyledDataTable
            rows={domain.contacts}
            columns={columns}
            getRowId={(row: any) => row._id}
            loading={domain.isLoading}
            rowCount={domain.total}
            paginationMode="server"
            paginationModel={{ page: ui.page - 1, pageSize: ui.pageSize }}
            pageSizeOptions={[20, 50, 100]}
            onPaginationModelChange={handlePaginationModelChange}
            density="standard"
            disableRowSelectionOnClick
            disableColumnMenu
            showCellVerticalBorder={false}
            showColumnVerticalBorder={false}
            getRowClassName={(params: any) => params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'}
          />
        </TableCard>
      </TableWrapper>

      <ContactDeleteModal />
      <ContactViewModal />
    </PageContainer>
  );
});
