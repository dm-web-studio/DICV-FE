import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const SectionContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 3, 8, 3),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 800,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(6),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -12,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 60,
    height: 3,
    backgroundColor: theme.palette.secondary.main,
  }
}));

export const CardsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const Card = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.main,
  borderRadius: (theme.shape.borderRadius as number) * 2,
  overflow: 'hidden',
  boxShadow: theme.shadows[4],
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const CardContentArea = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  zIndex: 1,
  backgroundColor: theme.palette.primary.main,
  // Adding a slight curve overlap effect on larger screens
  [theme.breakpoints.up('md')]: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    marginRight: -20,
    paddingRight: theme.spacing(7),
  },
}));

export const CardIconWrapper = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  color: theme.palette.primary.main,
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(3),
  },
  '& svg': {
    fontSize: 24,
  },
}));

export const CardIconWrapperSecondary = styled(CardIconWrapper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(2),
  },
  '&::after': {
    content: '""',
    display: 'block',
    width: 30,
    height: 2,
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing(1.5),
  }
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  lineHeight: 1.6,
  marginBottom: theme.spacing(4),
}));

export const CardButton = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-start',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  fontWeight: 600,
  padding: theme.spacing(1, 3),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
}));

export const CardImageWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
    minHeight: 'auto',
  },
}));

export const CardImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const CardHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: theme.spacing(3),
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 0,
    marginBottom: 0,
  },
}));
