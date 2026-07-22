import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useFacultyAdminStore } from '../store/FacultyAdminStoreContext';
import { useFacultyAdminColumns } from './FacultyAdminTableColumns';
import { FilterBar, TableWrapper, StyledDataTable, PageContainer, HeaderContainer, TitleGroup, PageTitle, TableCard } from '../../../shared/components/AdminTableLayout';
import type { Faculty } from '../../../shared/api/apiTypes';
import { StyledSchoolIcon, FacultySearchField } from './FacultyAdminTable.styles';

export const FacultyAdminTable = observer(function FacultyAdminTable() {
  const { ui, domain } = useFacultyAdminStore();
  const columns = useFacultyAdminColumns();

  useEffect(() => {
    void domain.fetchFaculty();
  }, [domain]);

  return (
    <PageContainer>
      <HeaderContainer>
        <TitleGroup>
          <StyledSchoolIcon />
          <Box>
            <PageTitle variant="h2">Faculty</PageTitle>
            <Typography variant="body2" color="text.secondary">Manage school faculty members.</Typography>
          </Box>
        </TitleGroup>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => ui.openDrawer('create')}
        >
          Add Faculty
        </Button>
      </HeaderContainer>

      <TableWrapper>
        <FilterBar>
          <FacultySearchField
            placeholder="Search by name or designation..."
            value={ui.search}
            margin="dense"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => ui.setSearch(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }
            }}
          />
        </FilterBar>

        <TableCard>
          <StyledDataTable
            rows={domain.filteredFaculty}
            columns={columns}
            getRowId={(row: Faculty) => row._id!}
            loading={domain.isLoading}
            density="standard"
            disableColumnMenu
            showCellVerticalBorder={false}
            showColumnVerticalBorder={false}
            getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'}
            initialState={{
              pagination: { paginationModel: { pageSize: 20 } },
            }}
            pageSizeOptions={[20, 50, 100]}
          />
        </TableCard>
      </TableWrapper>
    </PageContainer>
  );
});
