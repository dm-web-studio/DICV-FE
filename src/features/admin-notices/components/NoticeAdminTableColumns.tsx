import { type GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PushPinIcon from '@mui/icons-material/PushPin';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { NoticeCategoryBadge } from '../../../shared/components/NoticeCategoryBadge';
import { showConfirmation } from '../../../shared/stores/ConfirmDialogStore';
import { type Notice } from '../../../shared/api/apiTypes';
import { useNoticeAdminStore } from '../store/NoticeAdminStoreContext';
import { TitleCellContainer, TitleText, IconCellContainer } from './NoticeAdminTable.styles';

export function useNoticeAdminColumns(): GridColDef<Notice>[] {
  const { ui, domain } = useNoticeAdminStore();

  return [
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <TitleCellContainer>
          <ListAltIcon sx={{ fontSize: 18, color: 'primary.main', flexShrink: 0 }} />
          <Tooltip title={params.value as string} placement="top" arrow>
            <TitleText variant="body2">
              {params.value}
            </TitleText>
          </Tooltip>
        </TitleCellContainer>
      ),
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 150,
      renderCell: (params) => (
        <NoticeCategoryBadge category={params.value as string} />
      ),
    },
    {
      field: 'publishedAt',
      headerName: 'Published',
      width: 120,
      renderCell: (params) => new Date(params.row.publishedAt).toLocaleDateString(),
    },
    {
      field: 'isPinned',
      headerName: 'Pinned',
      width: 80,
      renderCell: (params) => (
        <IconCellContainer>
          {params.value
            ? <PushPinIcon fontSize="small" color="primary" />
            : <PushPinIcon fontSize="small" color="action" />}
        </IconCellContainer>
      ),
    },
    {
      field: 'showAsPopup',
      headerName: 'Popup',
      width: 80,
      renderCell: (params) => (
        <IconCellContainer>
          {params.value
            ? <OpenInNewIcon fontSize="small" color="warning" />
            : <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>—</Box>}
        </IconCellContainer>
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          key="edit"
          icon={<EditOutlinedIcon fontSize="small" />}
          label="Edit"
          onClick={() => ui.openDrawer('edit', params.row._id)}
          className="edit-action"
        />,
        <GridActionsCellItem
          key="delete"
          icon={<DeleteOutlinedIcon fontSize="small" />}
          label="Delete"
          onClick={() => {
            showConfirmation({
              variant: 'error',
              title: 'Delete this notice?',
              message: `"${params.row.title}" will be permanently removed. This can't be undone.`,
              confirmLabel: 'Delete',
              onConfirm: async () => {
                if (params.row._id) {
                  await domain.deleteNotice(params.row._id);
                }
              },
            });
          }}
          className="delete-action"
        />,
      ],
    },
  ];
}
