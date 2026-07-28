import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutlined';

export const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(6),
  boxShadow: theme.shadows[1],
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
}));

export const ContentArea = styled(Box)(() => ({
  flex: 1,
  zIndex: 1,
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}));

export const DecorativeTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 30,
    height: 2,
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing(2),
  }
}));

export const ImageArea = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    maxWidth: 280,
  },
}));

export const CardImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
});

export const ListItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
}));

export const StyledCheckIcon = styled(CheckCircleIcon)(() => ({
  fontSize: 16,
}));

export const ListItemText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: 500,
}));
