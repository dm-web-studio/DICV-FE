import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import type { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export const SectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const ColumnContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  minWidth: 0,
}));

export const ColumnCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  boxShadow: theme.shadows[1],
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export const DecorativeTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  position: 'relative',
  textTransform: 'uppercase',
  fontWeight: 700,
  paddingBottom: theme.spacing(2),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -1,
    left: 0,
    width: 40,
    height: 2,
    backgroundColor: theme.palette.secondary.main,
  }
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(1),
}));

export const NoticeItemCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'flex-start',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  textDecoration: 'none',
  padding: theme.spacing(1, 0),
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

export const DateBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 50,
  height: 50,
  backgroundColor: theme.palette.grey[50],
  borderRadius: (theme.shape.borderRadius as number) * 2,
  flexShrink: 0,
}));

export const NewBadge = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: theme.palette.common.white,
  padding: theme.spacing(0.25, 1),
  borderRadius: theme.shape.borderRadius,
  fontSize: 10,
  fontWeight: 700,
  lineHeight: 1.5,
  display: 'inline-flex',
  alignItems: 'center',
}));

export const NoticeCategoryBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'colorConfig',
})<{ colorConfig: { bg?: string; text?: string } }>(({ theme, colorConfig }) => ({
  backgroundColor: colorConfig.bg || theme.badgeColors?.grey?.bg,
  color: colorConfig.text || theme.badgeColors?.grey?.text,
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  fontSize: 10,
  fontWeight: 600,
  marginLeft: 'auto',
  alignSelf: 'center',
  whiteSpace: 'nowrap',
}));

export const GalleryGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const GalleryImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  overflow: 'hidden',
  aspectRatio: '3/4',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

export const ViewAllLink = styled(MuiLink)<MuiLinkProps & { component?: typeof RouterLink; to: string }>(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
  textDecoration: 'none',
}));

export const NoticeDayText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  lineHeight: 1,
  fontSize: 18,
  color: theme.palette.primary.main,
}));

export const NoticeMonthText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginTop: theme.spacing(0.5),
  fontSize: 10,
  color: theme.palette.primary.main,
}));

export const NoticeTitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  lineHeight: 1.3,
  fontSize: 14,
  flex: 1,
}));

export const NoticesColumn = styled(ColumnCard)(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.up('md')]: {
    flex: 4,
  },
}));

export const GalleryColumn = styled(ColumnCard)(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.up('md')]: {
    flex: 6,
  },
}));

export const EmptyStateText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  alignItems: 'center',
}));

export const NoticeLinkWrapper = styled(RouterLink)({
  textDecoration: 'none',
  display: 'block',
});

export const NoticeContentColumn = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}));

export const NoticeTitleRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  flexWrap: 'nowrap',
}));

export const NoticeBadgesWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexShrink: 0,
  alignItems: 'center',
  marginTop: theme.spacing(0.25),
}));

export const NoticeMetaRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  flexWrap: 'wrap',
}));

export const NoticeMetaItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  '& svg': {
    fontSize: 12,
    color: theme.palette.text.secondary,
  }
}));

export const NoticeMetaText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
}));

export const NoticeMetaDivider = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
