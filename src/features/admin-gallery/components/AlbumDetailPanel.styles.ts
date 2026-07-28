import { styled, alpha } from '@mui/material/styles';
import { Box, Paper, Stack, Button, Typography } from '@mui/material';
import { 
  CloudUploadOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  CalendarTodayOutlined,
  ImageOutlined,
  PhotoLibraryOutlined
} from '@mui/icons-material';

export const DetailPanelContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}));

export const EmptyStateContent = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  maxWidth: 400,
  padding: theme.spacing(4),
}));

export const DetailContentContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

export const HeaderStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(6),
}));

export const CoverImageContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'imageUrl',
})<{ imageUrl?: string | undefined }>(({ theme, imageUrl }) => ({
  position: 'relative',
  width: 200,
  height: 150,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
  overflow: 'hidden',
  flexShrink: 0,
  boxShadow: theme.shadows[1],
}));

export const EmptyStateIcon = styled(PhotoLibraryOutlined)(({ theme }) => ({
  fontSize: 64,
  color: theme.palette.text.disabled,
  opacity: 0.5,
}));

export const MetadataCalendarIcon = styled(CalendarTodayOutlined)({
  fontSize: 16,
});

export const MetadataImageIcon = styled(ImageOutlined)({
  fontSize: 16,
});

export const ActionUploadIcon = styled(CloudUploadOutlined)({
  fontSize: 18,
});

export const ActionEditIcon = styled(EditOutlined)({
  fontSize: 18,
});

export const ActionDeleteIcon = styled(DeleteOutlined)({
  fontSize: 18,
});

export const ChangeCoverButtonWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1.5),
  left: theme.spacing(1.5),
  backgroundColor: alpha(theme.palette.text.primary, 0.65),
  borderRadius: theme.shape.borderRadius,
  backdropFilter: 'blur(4px)',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: alpha(theme.palette.text.primary, 0.8),
  }
}));

export const ChangeCoverButton = styled(Button)(({ theme }) => ({
  color: theme.palette.background.paper,
  textTransform: 'none',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

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

