import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { NOTICE_CATEGORIES, NOTICE_CATEGORY_LABELS, type Notice } from '../../../shared/api/apiTypes';
import { useNoticeAdminStore } from '../store/NoticeAdminStoreContext';
import { FilterBar, TableWrapper, StyledDataTable, PageContainer, HeaderContainer, TitleGroup, TitleIcon, PageTitle, SearchField, FilterSelect, TableCard } from './NoticeAdminTable.styles';
import { useNoticeAdminColumns } from './NoticeAdminTableColumns';

export const NoticeAdminTable = observer(function NoticeAdminTable() {
  const { ui, domain } = useNoticeAdminStore();
  const columns = useNoticeAdminColumns();

  return (
    <PageContainer>
      <HeaderContainer>
        <TitleGroup>
          <TitleIcon />
          <Box>
            <PageTitle variant="h2">Notices</PageTitle>
            <Typography variant="body2" color="text.secondary">Create, manage and publish notices for your school community.</Typography>
          </Box>
        </TitleGroup>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => ui.openDrawer('create')}
        >
          Add Notice
        </Button>
      </HeaderContainer>

      <TableWrapper>
        <FilterBar>
          <SearchField
            placeholder="Search titles..."
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
          <FilterSelect
            displayEmpty
            value={ui.category || ''}
            onChange={(e: any) => ui.setCategory(e.target.value ? e.target.value as string : null)}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="">All Categories</MenuItem>
            {NOTICE_CATEGORIES.map((cat) => (
              <MenuItem key={cat} value={cat}>{NOTICE_CATEGORY_LABELS[cat]}</MenuItem>
            ))}
          </FilterSelect>
          <FilterSelect
            value={ui.sort}
            onChange={(e: any) => ui.setSort(e.target.value as string)}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="newest">Newest First</MenuItem>
            <MenuItem value="oldest">Oldest First</MenuItem>
          </FilterSelect>
        </FilterBar>

        <TableCard>
          <StyledDataTable
            rows={domain.notices}
            columns={columns}
            getRowId={(row: Notice) => row._id!}
            loading={domain.isLoading}
            rowCount={domain.total}
            paginationMode="server"
            paginationModel={{ page: ui.page - 1, pageSize: ui.pageSize }}
            pageSizeOptions={[20, 50, 100]}
            density="standard"
            disableColumnMenu
            showCellVerticalBorder={false}
            showColumnVerticalBorder={false}
            getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'}
            onPaginationModelChange={(model: { page: number; pageSize: number }) => {
              if (ui.pageSize !== model.pageSize) {
                ui.setPageSize(model.pageSize);
              } else if (ui.page !== model.page + 1) {
                ui.setPage(model.page + 1);
              }
            }}
          />
        </TableCard>
      </TableWrapper>
    </PageContainer>
  );
});
