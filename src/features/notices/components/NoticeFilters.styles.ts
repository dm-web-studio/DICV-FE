import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../../app/theme/theme'; // Import augmentation

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(-8),
  position: 'relative',
  zIndex: 2,
}));

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  padding: theme.spacing(4, 6),
  backgroundColor: theme.palette.background.paper,
  borderRadius: (theme.shape.borderRadius as number) * 2,
  boxShadow: theme.shadows[4],
  alignItems: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}));

export const FilterGroup = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 150,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const SearchFilterGroup = styled(FilterGroup)(({ theme }) => ({
  flex: 2,
  minWidth: 250,
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%',
  },
}));

export const Label = styled('label')(({ theme }) => ({
  fontSize: 12,
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  '& .MuiFormControl-root': {
    margin: 0,
  },
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  borderRadius: (theme.shape.borderRadius as number) * 2,
  height: 40,
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
