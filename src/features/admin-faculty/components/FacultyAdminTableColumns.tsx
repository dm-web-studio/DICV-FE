import { useMemo } from 'react';
import { type GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SchoolIcon from '@mui/icons-material/School';
import { useFacultyAdminStore } from '../store/FacultyAdminStoreContext';
import { TitleCellContainer, TitleText, IconCellContainer } from '../../../shared/components/AdminTableLayout';
import { showConfirmation } from '../../../shared/stores/ConfirmDialogStore';
import type { Faculty } from '../../../shared/api/apiTypes';
import { FacultyAvatar } from './FacultyAdminTable.styles';

export function useFacultyAdminColumns(): GridColDef[] {
  const { ui, domain } = useFacultyAdminStore();

  return useMemo(
    () => [
      {
        field: 'photoUrl',
        headerName: '',
        width: 60,
        sortable: false,
        filterable: false,
        renderCell: (params: any) => (
          <IconCellContainer>
            <FacultyAvatar src={params.value || ''} alt={params.row.name}>
              <SchoolIcon fontSize="small" />
            </FacultyAvatar>
          </IconCellContainer>
        ),
      },
      {
        field: 'name',
        headerName: 'Name',
        flex: 1.5,
        minWidth: 200,
        renderCell: (params: any) => (
          <TitleCellContainer>
            <Tooltip title={params.value as string} placement="top" arrow>
              <TitleText variant="body2">{params.value}</TitleText>
            </Tooltip>
          </TitleCellContainer>
        ),
      },
      {
        field: 'designation',
        headerName: 'Designation',
        flex: 1,
        minWidth: 150,
      },
      {
        field: 'experience',
        headerName: 'Experience',
        flex: 1,
        minWidth: 150,
      },
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        getActions: (params: any) => [
          <GridActionsCellItem
            key="edit"
            icon={<EditOutlinedIcon fontSize="small" />}
            label="Edit"
            onClick={() => ui.openDrawer('edit', params.row as Faculty)}
            className="edit-action"
          />,
          <GridActionsCellItem
            key="delete"
            icon={<DeleteOutlinedIcon fontSize="small" />}
            label="Delete"
            onClick={() => {
              showConfirmation({
                variant: 'error',
                title: 'Delete this faculty member?',
                message: `"${params.row.name}" will be permanently removed. This can't be undone.`,
                confirmLabel: 'Delete',
                onConfirm: async () => {
                  await domain.deleteFaculty((params.row as Faculty)._id);
                },
              });
            }}
            className="delete-action"
          />,
        ],
      },
    ],
    [ui, domain]
  );
}
