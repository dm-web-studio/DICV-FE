import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { DataTable } from '../DataTable';

export const PageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  height: '100%',
}));

export const HeaderContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const TitleGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(0.5),
  color: theme.palette.primary.main,
}));

export const TableWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  overflow: 'hidden',
}));

export const FilterBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  alignItems: 'center',
  flexWrap: 'wrap',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

export const SearchField = styled(TextField)({
  minWidth: 200,
});

export const FilterSelect = styled(Select)({
  minWidth: 150,
});

export const TableCard = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: 0,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledDataTable = styled(DataTable)(({ theme }) => ({
  border: 'none',
  '& .MuiDataGrid-columnHeaders': { 
    backgroundColor: theme.palette.grey[200],
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  '& .MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 700,
    fontSize: 13,
    color: theme.palette.text.secondary,
  },
  '& .MuiDataGrid-cell': {
    fontSize: 13,
    borderBottom: 'none',
  },
  '& .MuiDataGrid-row.even-row': {
    backgroundColor: theme.palette.background.paper,
  },
  '& .MuiDataGrid-row.odd-row': {
    backgroundColor: theme.palette.grey[200],
  },
  '& .MuiDataGrid-row:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '& .MuiDataGrid-footerContainer': {
    borderTop: 'none',
  },
  '& .MuiTablePagination-root': {
    fontSize: 13,
  },
  '& .MuiTablePagination-selectLabel': {
    fontSize: 13,
    margin: 0,
  },
  '& .MuiTablePagination-displayedRows': {
    fontSize: 13,
    margin: 0,
  },
  '& .MuiTablePagination-select': {
    fontSize: 13,
  },
  '& .edit-action:hover': {
    color: theme.palette.warning.main,
  },
  '& .delete-action:hover': {
    color: theme.palette.error.main,
  },
}));

export const TitleCellContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  minWidth: 0,
  width: '100%',
  height: '100%',
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

export const IconCellContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
});

export const PageLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  backgroundColor: theme.palette.grey[50],
  overflow: 'hidden',
}));

export const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  height: '100%',
  padding: theme.spacing(4),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));
