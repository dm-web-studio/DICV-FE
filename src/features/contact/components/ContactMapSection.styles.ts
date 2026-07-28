import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const MapContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 450,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  overflow: 'hidden',
  boxShadow: theme.shadows[1],
  [theme.breakpoints.down('md')]: {
    height: 300,
  },
}));
