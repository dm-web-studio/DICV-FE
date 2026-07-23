import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

export const LayoutRoot = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: 'calc(100vh - 120px)',
  padding: theme.spacing(3),
}));

export const LayoutGrid = styled(Grid)({
  height: '100%',
});

export const SidebarContainer = styled(Grid)({
  height: '100%',
});

export const MainContentContainer = styled(Grid)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const DetailPanelWrapper = styled(Box)({
  flexShrink: 0,
});

export const PhotosPanelWrapper = styled(Box)({
  flex: 1,
  minHeight: 0,
});
