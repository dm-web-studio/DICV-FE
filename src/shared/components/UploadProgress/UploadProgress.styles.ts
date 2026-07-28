import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const UploadProgressContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

export const UploadProgressRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

export const UploadProgressBarWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  marginRight: theme.spacing(1),
}));

export const UploadProgressTextWrapper = styled(Box)({
  minWidth: 35,
});
