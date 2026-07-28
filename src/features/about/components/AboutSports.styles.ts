import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const SectionWrapper = styled(Box)({
  width: '100%',
});

export const SportsPanel = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  borderRadius: Number(theme.shape.borderRadius) * 4.5,
  padding: theme.spacing(8.5, 10),
  display: 'grid',
  gridTemplateColumns: '0.9fr 1.1fr',
  gap: theme.spacing(7.5),
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: 22,
}));

export const SectionDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  marginTop: theme.spacing(2),
  fontSize: '13.3px',
  maxWidth: '340px',
}));

export const ChipsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(2.5),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const SportChip = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  backgroundColor: alpha(theme.palette.common.white, 0.05),
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  borderRadius: Number(theme.shape.borderRadius) * 3,
  padding: theme.spacing(4, 1.5),
  color: theme.palette.primary.contrastText,
  '& svg': {
    fontSize: 28,
    color: theme.palette.secondary.main,
  },
  '& span': {
    fontSize: '12.3px',
    fontWeight: 600,
  },
}));
