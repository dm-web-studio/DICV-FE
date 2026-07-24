import { type GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Tooltip } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import type { ContactSubmission } from '../../../shared/api/apiTypes';
import { StyledBadge, type BadgeColor } from '../../../shared/components/NoticeCategoryBadge/NoticeCategoryBadge.styles';
import { formatFullDate } from '../../../shared/utils/dateUtils';
import { useAdminContactStore } from '../store/AdminContactStoreContext';

export const StatusChip: React.FC<{ status: ContactSubmission['status'] }> = ({ status }) => {
  let color: BadgeColor = 'grey';
  
  switch (status) {
    case 'unread':
      color = 'red';
      break;
    case 'read':
      color = 'blue';
      break;
    case 'resolved':
      color = 'green';
      break;
  }
  
  return (
    <StyledBadge 
      label={status.toUpperCase()} 
      badgeColor={color} 
      size="small" 
    />
  );
};

export const useContactTableColumns = (): GridColDef<ContactSubmission>[] => {
  const { ui, domain } = useAdminContactStore();

  return [
    {
      field: 'createdAt',
      headerName: 'Date',
      width: 130,
      valueGetter: (_, row) => formatFullDate(row.createdAt),
      renderCell: (params) => (
        <Tooltip title={params.value as string} arrow placement="bottom-start" enterDelay={500}>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block', width: '100%' }}>
            {params.value}
          </span>
        </Tooltip>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Tooltip title={params.value as string} arrow placement="bottom-start" enterDelay={500}>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block', width: '100%' }}>
            {params.value}
          </span>
        </Tooltip>
      ),
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Tooltip title={params.value as string} arrow placement="bottom-start" enterDelay={500}>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block', width: '100%' }}>
            {params.value}
          </span>
        </Tooltip>
      ),
    },
    {
      field: 'subject',
      headerName: 'Subject',
      flex: 1.5,
      minWidth: 200,
      renderCell: (params) => (
        <Tooltip title={params.value as string} arrow placement="bottom-start" enterDelay={500}>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block', width: '100%' }}>
            {params.value}
          </span>
        </Tooltip>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => <StatusChip status={params.row.status} />,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 150,
      align: 'left',
      headerAlign: 'left',
      getActions: (params) => {
        const isResolved = params.row.status === 'resolved';
        const isRead = params.row.status === 'read';
        const isUnread = params.row.status === 'unread';
        
        const actions = [
          <GridActionsCellItem
            key="view"
            icon={
              <Tooltip title="View" arrow placement="top">
                <VisibilityOutlinedIcon fontSize="small" />
              </Tooltip>
            }
            label="View"
            onClick={() => ui.openViewDialog(params.row)}
            color="primary"
          />
        ];

        if (!isUnread) {
          actions.push(
            <GridActionsCellItem
              key="markUnread"
              icon={
                <Tooltip title="Mark Unread" arrow placement="top">
                  <MarkEmailUnreadOutlinedIcon fontSize="small" />
                </Tooltip>
              }
              label="Mark Unread"
              onClick={() => domain.updateContactStatus(params.row._id, 'unread')}
              disabled={domain.isSaving}
              className="edit-action"
            />
          );
        }

        if (!isRead) {
          actions.push(
            <GridActionsCellItem
              key="markRead"
              icon={
                <Tooltip title="Mark Read" arrow placement="top">
                  <MarkEmailReadOutlinedIcon fontSize="small" />
                </Tooltip>
              }
              label="Mark Read"
              onClick={() => domain.updateContactStatus(params.row._id, 'read')}
              disabled={domain.isSaving}
              className="edit-action"
            />
          );
        }

        if (!isResolved) {
          actions.push(
            <GridActionsCellItem
              key="markResolved"
              icon={
                <Tooltip title="Mark Resolved" arrow placement="top">
                  <CheckCircleOutlinedIcon fontSize="small" />
                </Tooltip>
              }
              label="Mark Resolved"
              onClick={() => domain.updateContactStatus(params.row._id, 'resolved')}
              disabled={domain.isSaving}
              className="edit-action"
            />
          );
        }

        actions.push(
          <GridActionsCellItem
            key="delete"
            icon={
              <Tooltip title="Delete" arrow placement="top">
                <DeleteOutlinedIcon fontSize="small" />
              </Tooltip>
            }
            label="Delete"
            onClick={() => ui.openDeleteDialog(params.row)}
            className="delete-action"
          />
        );

        return actions;
      },
    },
  ];
};
