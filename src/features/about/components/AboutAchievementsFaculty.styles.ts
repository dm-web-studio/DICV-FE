import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const SectionWrapper = styled(Box)({
  width: '100%',
});

export const SectionHead = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8.5),
}));

export const Eyebrow = styled(Typography)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  color: theme.palette.secondary.dark,
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '1.2px',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(2),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 26,
  textAlign: 'left',
  position: 'relative',
  paddingBottom: theme.spacing(2),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 60,
    height: 3,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(6),
  boxShadow: theme.shadows[1],
  display: 'flex',
  flexDirection: 'column',
}));

export const CardTop = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(4),
}));

export const DecorativeTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  position: 'relative',
  fontSize: '16.5px',
  '&::after': {
    content: '""',
    display: 'block',
    width: 30,
    height: 2,
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing(2),
  }
}));

export const CardHeaderIcon = styled(Box)<{ isGold?: boolean }>(({ theme, isGold }) => ({
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: isGold ? theme.palette.secondary.main : theme.palette.primary.main,
  color: theme.palette.background.paper,
  '& svg': {
    fontSize: 20,
  },
}));

export const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(2.5, 2),
  margin: theme.spacing(0, -2),
  borderTop: `1px solid ${theme.palette.divider}`,
  transition: 'background-color 0.2s ease',
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  '&:first-of-type': {
    borderTop: 'none',
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderTopColor: 'transparent',
    '& .row-dot': {
      backgroundColor: theme.badgeColors.blue.bg,
      color: theme.palette.primary.main,
    }
  },
}));

export const Dot = styled(Box)(({ theme }) => ({
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  backgroundColor: theme.palette.grey[50],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: '12px',
  color: theme.palette.primary.dark,
  flexShrink: 0,
  transition: 'all 0.2s ease',
  '& svg': {
    fontSize: 16,
  },
}));

export const RowTitle = styled(Typography)(({ theme }) => ({
  fontSize: '13.2px',
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const RowDesc = styled(Typography)(({ theme }) => ({
  fontSize: '11.8px',
  color: theme.palette.text.secondary,
}));

export const ActionLink = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  fontSize: '12.8px',
  fontWeight: 700,
  color: theme.palette.primary.dark,
  marginTop: theme.spacing(3.5),
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
