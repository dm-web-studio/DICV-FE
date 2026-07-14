import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const SectionWrapper = styled(Box)({
  width: '100%',
});

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1.15fr 0.85fr',
  gap: theme.spacing(10),
  alignItems: 'start',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
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
  marginBottom: theme.spacing(3.5),
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

export const BodyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '14.3px',
  marginBottom: theme.spacing(3.5),
  '&:last-of-type': {
    marginBottom: 0,
  }
}));

export const AffilRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2.5),
  flexWrap: 'wrap',
  marginTop: theme.spacing(4.5),
}));

export const AffilChip = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  backgroundColor: theme.palette.grey[50],
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1.5, 3),
  borderRadius: '20px',
  fontSize: '12.3px',
  fontWeight: 600,
  color: theme.palette.primary.main,
  '& svg': {
    color: theme.palette.secondary.dark,
    fontSize: 18,
  },
}));

export const StackContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3.5),
}));

export const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: Number(theme.shape.borderRadius) * 3.5,
  padding: theme.spacing(5.5),
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
  cursor: 'default',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 30px rgba(11,61,145,0.08)',
    borderColor: theme.palette.primary.main,
  },
}));

export const CardTop = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

export const CardIcon = styled(Box)(({ theme }) => ({
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '& svg': {
    fontSize: 22,
  },
}));

export const DecorativeTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 15,
  position: 'relative',
  paddingBottom: theme.spacing(1.5),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 40,
    height: 3,
    backgroundColor: theme.palette.secondary.main,
  }
}));

export const CardDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '13.2px',
}));
