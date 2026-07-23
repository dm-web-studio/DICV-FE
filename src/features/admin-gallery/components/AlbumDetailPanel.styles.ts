import { styled } from '@mui/material/styles';
import { Box, Paper, Stack, Button, Typography } from '@mui/material';

export const DetailPanelContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const DetailContentContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

export const HeaderStack = styled(Stack)({
  flexDirection: 'row',
  gap: '24px', // mapping from spacing(6)
});

export const CoverImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 200,
  height: 150,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  flexShrink: 0,
  boxShadow: theme.shadows[1],
}));

export const ChangeCoverButtonWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1.5),
  left: theme.spacing(1.5),
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
  borderRadius: theme.shape.borderRadius,
  backdropFilter: 'blur(4px)',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  }
}));

export const ChangeCoverButton = styled(Button)({
  color: 'white',
  textTransform: 'none',
  paddingLeft: '8px',
  paddingRight: '8px',
  paddingTop: '4px',
  paddingBottom: '4px',
});

export const ContentBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  justifyContent: 'space-between',
}));

export const TitleText = styled(Typography)({
  fontSize: 20,
});

export const MetadataStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(3),
  color: theme.palette.text.secondary,
}));

export const MetadataItemStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(0.75),
  alignItems: 'center',
}));

export const MetadataItemText = styled(Typography)({
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
});

export const ActionButtonsStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1.5),
}));
