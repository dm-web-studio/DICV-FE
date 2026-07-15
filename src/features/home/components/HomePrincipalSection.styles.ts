import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
export const SectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const LeftColumn = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  gap: theme.spacing(4),
  alignItems: 'stretch', // ensures children stretch to available height
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const PrincipalPhotoWrapper = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: 300,
  minHeight: 380,
  height: '100%',
  borderRadius: Number(theme.shape.borderRadius) * 4,
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 300,
    minHeight: 'auto',
  },
}));

export const PrincipalPhoto = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'top center',
});

export const PrincipalContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', // Align to top
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  paddingTop: theme.spacing(1), // Slight padding to visually perfectly align with image top curve
}));

export const SignatureText = styled(Box)(({ theme }) => ({
  fontFamily: '"Dancing Script", cursive',
  fontSize: 18,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
}));

export const RightColumn = styled(Box)(({ theme }) => ({
  flex: 1,
  position: 'relative',
  minHeight: 350,
  [theme.breakpoints.down('md')]: {
    minHeight: 300,
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  width: `calc(100% - ${theme.spacing(4)})`,
  height: `calc(100% - ${theme.spacing(4)})`,
  borderRadius: Number(theme.shape.borderRadius) * 4,
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '100%',
  }
}));

export const StudentsImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

export const QuotationBox = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  bottom: 0, 
  right: 0, 
  padding: theme.spacing(4),
  backgroundColor: theme.palette.primary.dark, // Deeper blue
  color: theme.palette.common.white,
  borderRadius: Number(theme.shape.borderRadius) * 4,
  maxWidth: 400, // Slightly wider for row layout
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    bottom: 0,
    right: 0,
    marginTop: theme.spacing(-4),
    maxWidth: 'none',
    width: `calc(100% - ${theme.spacing(4)})`,
    alignSelf: 'flex-end',
  },
}));

export const QuoteText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.common.white,
  fontWeight: 500,
  lineHeight: 1.5,
}));

export const QuoteAuthor = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.common.white,
  fontWeight: 700,
  textAlign: 'left',
  marginTop: theme.spacing(2),
}));

export const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
  fontWeight: 700,
  marginBottom: theme.spacing(1),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 32,
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
}));

export const PrincipalMessageText = styled(Typography)({
  display: '-webkit-box',
  WebkitLineClamp: 5,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  lineHeight: 1.6,
});

export const ReadMoreButton = styled(Button)<ButtonProps & { component?: typeof RouterLink; to: string }>(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: 14,
  padding: 0,
  textTransform: 'none',
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
  textDecorationThickness: '2px',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
    textDecorationColor: theme.palette.secondary.main,
  }
}));
