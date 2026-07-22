import { styled } from '@mui/material/styles';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

export const StyledAssignmentIndIcon = styled(AssignmentIndIcon)(({ theme }) => ({
  fontSize: 32,
  color: theme.palette.primary.main,
}));

export const StaffDeskAvatar = styled(Avatar)(() => ({
  width: 40,
  height: 40,
}));

export const StaffDeskSignature = styled('img')(({ theme }) => ({
  width: 80,
  height: 40,
  objectFit: 'contain',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

export const RoleBadge = styled(Chip)(({ theme }) => ({
  fontWeight: 600,
  fontSize: theme.typography.caption.fontSize,
  height: 24,
  borderWidth: 1,
  textTransform: 'uppercase',
  letterSpacing: 0.5,
  '& .MuiChip-label': {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
