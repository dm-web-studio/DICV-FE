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
  color: theme.palette.primary.main,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 60,
    height: 3,
    backgroundColor: theme.palette.secondary.main,
  }
}));

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(4.5),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: Number(theme.shape.borderRadius) * 3.5,
  padding: theme.spacing(5.5, 4.5),
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
  cursor: 'default',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 30px rgba(11,61,145,0.08)',
    borderColor: theme.palette.primary.main,
  },
}));

export const CardIcon = styled(Box)<{ colorType: 'primary' | 'secondary' }>(({ theme, colorType }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: colorType === 'primary' ? theme.badgeColors.blue.bg : theme.badgeColors.orange.bg,
  color: colorType === 'primary' ? theme.palette.primary.main : theme.palette.secondary.dark,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  '& svg': {
    fontSize: 24,
  },
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '16px',
  fontWeight: 700,
  marginBottom: theme.spacing(1.5),
  letterSpacing: '-0.2px'
}));

export const CardDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '13.5px',
  lineHeight: 1.6
}));
