import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStaffDeskAdminStore } from '../store/StaffDeskAdminStoreContext';
import { useStaffDeskAdminColumns } from './StaffDeskAdminTableColumns';
import { TableWrapper, StyledDataTable, PageContainer, TableCard } from '../../../shared/components/AdminTableLayout';
import type { StaffDesk } from '../../../shared/api/apiTypes';

export const StaffDeskAdminTable = observer(function StaffDeskAdminTable() {
  const { domain } = useStaffDeskAdminStore();
  const columns = useStaffDeskAdminColumns();

  useEffect(() => {
    void domain.fetchStaffDesk();
  }, [domain]);

  return (
    <PageContainer>

      <TableWrapper>
        <TableCard>
          <StyledDataTable
            rows={domain.staffDeskList}
            columns={columns}
            getRowId={(row: StaffDesk) => row.type}
            loading={domain.isLoading}
            density="standard"
            disableColumnMenu
            showCellVerticalBorder={false}
            showColumnVerticalBorder={false}
            getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'}
            hideFooter
          />
        </TableCard>
      </TableWrapper>
    </PageContainer>
  );
});
