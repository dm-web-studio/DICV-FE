import { ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TileGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(2),
}));

export const ActionTile = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'bgColor' && prop !== 'textColor'
})<{ bgColor: string; textColor: string }>(({ theme, bgColor, textColor }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2.5, 1.5),
  borderRadius: 12,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  width: '100%',
  
  '&:hover': {
    borderColor: textColor,
    transform: 'translateY(-4px)',
    boxShadow: `0 12px 24px -10px ${textColor}40`, // soft colored shadow
    '& .icon-wrapper': {
      transform: 'scale(1.1)',
    }
  },

  '& .icon-wrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: bgColor,
    color: textColor,
    transition: 'transform 0.2s ease',
    '& svg': {
      fontSize: 24,
    }
  },
  
  '& .action-text': {
    fontWeight: 600,
    fontSize: 13,
    color: theme.palette.text.primary,
    textAlign: 'center',
    lineHeight: 1.3,
  }
}));
