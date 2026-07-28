import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(6),
}));

export const AlbumHeaderRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
});

export const BackLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  marginBottom: theme.spacing(4),
  padding: theme.spacing(1, 2),
  borderRadius: 16,
  backgroundColor: theme.palette.grey[50],
  fontWeight: theme.typography.fontWeightMedium,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[100],
  },
  '& svg': {
    marginRight: theme.spacing(1),
    fontSize: '1rem',
  }
}));


