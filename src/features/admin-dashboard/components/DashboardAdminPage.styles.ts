import { styled } from '@mui/material/styles';
import { Box, Card, Typography } from '@mui/material';

export const DashboardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  padding: theme.spacing(4),
  overflowY: 'auto',
  height: '100%',
}));

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: theme.spacing(3),
}));

export const StatCardWrapper = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  boxShadow: theme.shadows[1],
  borderRadius: 12,
  border: `1px solid ${theme.palette.divider}`,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 12px 24px -10px ${theme.palette.action.focus}`,
    borderColor: theme.palette.primary.main,
    
    '& .stat-icon': {
      transform: 'scale(1.1) rotate(5deg)',
    }
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: -20,
    right: -20,
    width: 100,
    height: 100,
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, transparent 100%)`,
    opacity: 0.5,
    zIndex: 0,
    pointerEvents: 'none',
  }
}));

export const IconContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'bgColor' && prop !== 'color'
})<{ bgColor: string; color: string }>(({ theme, bgColor, color }) => ({
  width: 56,
  height: 56,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: bgColor,
  color: color,
  zIndex: 1, // Stay above the decorative circle
  transition: 'transform 0.3s ease',
  '& svg': {
    fontSize: 28,
  },
}));

export const ListsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: theme.spacing(4),
}));

export const ColumnContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));

export const ListCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  boxShadow: theme.shadows[1],
  borderRadius: 12,
  border: `1px solid ${theme.palette.divider}`,
  flex: 1,
  minHeight: 0,
}));

export const ListHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: theme.spacing(1.5),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const ListTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 16,
  color: theme.palette.text.primary,
}));

export const QuickLinksContainer = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  boxShadow: theme.shadows[1],
  borderRadius: 12,
  border: `1px solid ${theme.palette.divider}`,
  flexShrink: 0,
}));
