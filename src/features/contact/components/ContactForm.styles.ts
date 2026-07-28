import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const FormCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(6),
  flex: 1,
  boxShadow: theme.shadows[1],
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));
