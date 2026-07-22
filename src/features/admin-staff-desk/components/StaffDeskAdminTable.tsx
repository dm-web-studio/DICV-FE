import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStaffDeskAdminStore } from '../store/StaffDeskAdminStoreContext';
import { useStaffDeskAdminColumns } from './StaffDeskAdminTableColumns';
import { TableWrapper, StyledDataTable, PageContainer, HeaderContainer, TitleGroup, PageTitle, TableCard } from '../../../shared/components/AdminTableLayout';
import type { StaffDesk } from '../../../shared/api/apiTypes';
import { StyledAssignmentIndIcon } from './StaffDeskAdminTable.styles';

export const StaffDeskAdminTable = observer(function StaffDeskAdminTable() {
  const { domain } = useStaffDeskAdminStore();
  const columns = useStaffDeskAdminColumns();

  useEffect(() => {
    void domain.fetchStaffDesk();
  }, [domain]);

  return (
    <PageContainer>
      <HeaderContainer>
        <TitleGroup>
          <StyledAssignmentIndIcon />
          <Box>
            <PageTitle variant="h2">Staff Desk</PageTitle>
            <Typography variant="body2" color="text.secondary">Manage Principal, President, and Vice Principal messages.</Typography>
          </Box>
        </TitleGroup>
      </HeaderContainer>

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
