import { styled } from '@mui/material/styles';
import { FormControl, Box, Typography } from '@mui/material';
import { ListAlt } from '@mui/icons-material';

export * from '../../../shared/components/AdminTableLayout';

export const FilterFormControl = styled(FormControl)({
  minWidth: 150,
});

export const Spacer = styled(Box)({
  flex: 1,
});

export const CategoryIcon = styled(ListAlt)(({ theme }) => ({
  fontSize: 18,
  color: theme.palette.primary.main,
  flexShrink: 0,
}));

export const EmptyCellText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
