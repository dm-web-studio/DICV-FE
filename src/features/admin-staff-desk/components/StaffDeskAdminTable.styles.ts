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

export type BadgeColor = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal' | 'indigo' | 'pink' | 'cyan' | 'grey';

export const RoleBadge = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'badgeColor',
})<{ badgeColor: BadgeColor }>(({ theme, badgeColor }) => {
  const colorToken = theme.badgeColors[badgeColor] || theme.badgeColors.grey;
  
  return {
    backgroundColor: colorToken.bg,
    color: colorToken.text,
    fontWeight: 600,
    fontSize: 11,
    height: 24,
    border: 'none',
    borderRadius: (theme.shape.borderRadius as number) * 3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    '& .MuiChip-label': {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  };
});
