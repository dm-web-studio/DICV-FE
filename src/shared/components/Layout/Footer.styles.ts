import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const FooterRoot = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(2),
}));

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: `1px solid ${alpha(theme.palette.common.white, 0.3)}`,
  color: theme.palette.common.white,
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    borderColor: alpha(theme.palette.common.white, 0.5),
  },
}));

export const SectionHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 600,
  letterSpacing: '0.5px',
  textAlign: 'left',
  color: 'inherit',
}));

export const FooterLink = styled(RouterLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: alpha(theme.palette.common.white, 0.7),
  textDecoration: 'none',
  marginBottom: theme.spacing(1.25),
  '&:hover': {
    color: theme.palette.common.white,
  },
}));

export const ContactRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(1.25),
  color: alpha(theme.palette.common.white, 0.7),
}));

export const ContactIconWrapper = styled(Box)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.7),
  display: 'flex',
  alignItems: 'flex-start',
  marginRight: theme.spacing(1),
  marginTop: '3px',
  flexShrink: 0,
  '& > svg': {
    fontSize: '16px',
  },
}));

export const ContactText = styled(Typography)({
  textAlign: 'left',
  lineHeight: 1.6,
  color: 'inherit',
});

export const BottomBar = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

export const LogoImage = styled('img')(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  objectFit: 'contain',
  filter: 'brightness(0) invert(1)',
}));

export const BrandContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(3),
}));

export const BrandTitle = styled(Typography)({
  fontWeight: 700,
  display: 'block',
  textAlign: 'left',
  lineHeight: 1.1,
  color: 'inherit',
});

export const BrandSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  display: 'block',
  textAlign: 'left',
  letterSpacing: '0.15em',
  fontSize: '0.85em',
  marginTop: theme.spacing(0.5),
  lineHeight: 1.1,
  color: 'inherit',
}));

export const SocialStack = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const QuickLinkIcon = styled(ChevronRightIcon)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
  opacity: 0.7,
  fontSize: '20px',
}));

export const TaglineText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: alpha(theme.palette.common.white, 0.7),
  lineHeight: 1.6,
  textAlign: 'left',
}));

export const FooterCaption = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.5),
}));

export const ColumnDivider = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isLast',
})<{ isLast?: boolean }>(({ theme, isLast }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    borderRight: isLast ? 'none' : `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
    paddingRight: isLast ? 0 : theme.spacing(3),
  },
  [theme.breakpoints.down('md')]: {
    borderBottom: isLast ? 'none' : `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
    paddingBottom: isLast ? 0 : theme.spacing(3),
  },
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const FooterGrid = styled(Grid)({
  alignItems: 'stretch',
});

export const ColumnContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});
