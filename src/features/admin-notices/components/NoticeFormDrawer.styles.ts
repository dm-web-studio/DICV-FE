import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export const DrawerHeaderIcon = styled(DescriptionOutlinedIcon)(({ theme }) => ({
  fontSize: 28,
  color: theme.palette.warning.main,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 700,
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  display: 'block',
}));

export const CheckboxLabelContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));
