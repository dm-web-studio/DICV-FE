import { DataGrid, type DataGridProps } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const TableContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  '& .MuiDataGrid-root': {
    border: 'none',
    backgroundColor: theme.palette.background.paper,
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  '& .MuiDataGrid-cell': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export function DataTable(props: DataGridProps) {
  return (
    <TableContainer>
      <DataGrid
        density="compact"
        disableRowSelectionOnClick
        pageSizeOptions={[10, 25, 50]}
        {...props}
      />
    </TableContainer>
  );
}
