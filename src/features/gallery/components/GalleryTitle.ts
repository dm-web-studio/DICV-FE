import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const GalleryTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  position: 'relative',
  display: 'inline-block',
  marginBottom: theme.spacing(4),
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -8,
    height: 3,
    width: 60,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
  },
}));
