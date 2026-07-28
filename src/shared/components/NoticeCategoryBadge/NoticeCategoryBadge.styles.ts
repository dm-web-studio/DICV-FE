import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

export type BadgeColor = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal' | 'indigo' | 'pink' | 'cyan' | 'grey';

export const StyledBadge = styled(Chip, {
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
    '& .MuiChip-label': {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  };
});
