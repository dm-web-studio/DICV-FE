import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(10),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: theme.spacing(10),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const TextColumn = styled(Box)(({ theme }) => ({
  flex: 1.2,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));

export const Eyebrow = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(3),
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 800,
  textTransform: 'uppercase',
  marginBottom: theme.spacing(4),
  lineHeight: 1.2,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -12,
    left: 0,
    width: 60,
    height: 3,
    backgroundColor: theme.palette.secondary.main,
  }
}));

export const MessageParagraph = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
  marginBottom: theme.spacing(2),
}));

export const SignatureArea = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}));

export const SignatureImage = styled('img')(({ theme }) => ({
  height: 60,
  objectFit: 'contain',
  objectPosition: 'left center',
  transform: 'translateX(-12px)',
  marginBottom: theme.spacing(1),
}));

export const NameText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

export const RoleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const ImageColumn = styled(Box)(({ theme }) => ({
  flex: 0.8,
  display: 'none',
  justifyContent: 'center',
  alignItems: 'stretch',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export const PortraitImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  height: '100%',
  borderRadius: (theme.shape.borderRadius as number) * 3,
  objectFit: 'cover',
  boxShadow: theme.shadows[4],
}));

export const PortraitImageMobile = styled('img')(({ theme }) => ({
  width: 90,
  height: 90,
  borderRadius: '50%',
  objectFit: 'cover',
  boxShadow: theme.shadows[2],
  flexShrink: 0,
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const HeaderRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
}));

export const TitleWrapper = styled(Box)({});

export const GreetingText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontSize: 16,
  marginBottom: theme.spacing(4),
  lineHeight: 1.8,
}));
