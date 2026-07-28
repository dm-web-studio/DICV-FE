import { useMemo } from 'react';
import { type GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import type { GridRenderCellParams, GridRowParams } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { useStaffDeskAdminStore } from '../store/StaffDeskAdminStoreContext';
import { TitleCellContainer, TitleText, IconCellContainer } from '../../../shared/components/AdminTableLayout';
import type { StaffDesk } from '../../../shared/api/apiTypes';
import { StaffDeskAvatar, StaffDeskSignature, RoleBadge } from './StaffDeskAdminTable.styles';
import Tooltip, { tooltipClasses, type TooltipProps } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const WideTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={className ? { popper: className } : undefined} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 600,
    fontSize: theme.typography.caption.fontSize,
  },
}));

export function useStaffDeskAdminColumns(): GridColDef<StaffDesk>[] {
  const { ui } = useStaffDeskAdminStore();

  return useMemo(
    () => [
      {
        field: 'photoUrl',
        headerName: '',
        width: 80,
        sortable: false,
        filterable: false,
        renderCell: (params: GridRenderCellParams<StaffDesk>) => (
          <IconCellContainer>
            <StaffDeskAvatar src={params.value as string || ''} alt={params.row.name}>
              <PersonIcon fontSize="small" />
            </StaffDeskAvatar>
          </IconCellContainer>
        ),
      },
      {
        field: 'type',
        headerName: 'Role',
        flex: 1,
        minWidth: 150,
        renderCell: (params: GridRenderCellParams<StaffDesk>) => {
          const deskType = params.value as 'principal' | 'president' | 'vice-principal';
          const config = ui.roleConfig[deskType] || { label: params.value as string, color: 'grey' };
          return (
            <TitleCellContainer>
              <RoleBadge label={config.label} badgeColor={config.color as any} />
            </TitleCellContainer>
          );
        }
      },
      {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        minWidth: 120,
        renderCell: (params: GridRenderCellParams<StaffDesk>) => (
          <TitleCellContainer>
            <WideTooltip title={params.value as string} placement="bottom-start" arrow>
              <TitleText variant="body2">{params.value as string}</TitleText>
            </WideTooltip>
          </TitleCellContainer>
        ),
      },
      {
        field: 'message',
        headerName: 'Message',
        flex: 2,
        minWidth: 200,
        renderCell: (params: GridRenderCellParams<StaffDesk>) => (
          <TitleCellContainer>
            <WideTooltip title={params.value as string} placement="bottom-start" arrow>
              <TitleText variant="body2">{params.value as string}</TitleText>
            </WideTooltip>
          </TitleCellContainer>
        ),
      },
      {
        field: 'homeMessage',
        headerName: 'Home Message',
        flex: 1.5,
        minWidth: 150,
        renderCell: (params: GridRenderCellParams<StaffDesk>) => {
          if (!params.value) return null;
          return (
            <TitleCellContainer>
              <WideTooltip title={params.value as string} placement="bottom-start" arrow>
                <TitleText variant="body2">{params.value as string}</TitleText>
              </WideTooltip>
            </TitleCellContainer>
          );
        },
      },
      {
        field: 'signatureUrl',
        headerName: 'Signature',
        width: 100,
        sortable: false,
        filterable: false,
        renderCell: (params: GridRenderCellParams<StaffDesk>) => {
          if (!params.value) return null;
          return (
            <IconCellContainer>
              <StaffDeskSignature src={params.value as string} alt="Signature" />
            </IconCellContainer>
          );
        },
      },
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        getActions: (params: GridRowParams<StaffDesk>) => [
          <GridActionsCellItem
            key="edit"
            icon={<EditOutlinedIcon fontSize="small" />}
            label="Edit"
            onClick={() => ui.openDrawer(params.row)}
            className="edit-action"
          />,
        ],
      },
    ],
    [ui]
  );
}
