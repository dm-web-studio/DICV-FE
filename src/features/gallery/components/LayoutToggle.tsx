import { observer } from 'mobx-react-lite';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DashboardIcon from '@mui/icons-material/Dashboard'; // Grid
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt'; // Masonry
import { useGalleryStore } from '../store/GalleryStoreContext';
import type { GalleryLayoutMode } from '../store/GalleryUIStore';

export const LayoutToggle = observer(function LayoutToggle() {
  const { ui } = useGalleryStore();

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newLayout: GalleryLayoutMode | null,
  ) => {
    if (newLayout !== null) {
      ui.setLayoutMode(newLayout);
    }
  };

  return (
    <ToggleButtonGroup
      value={ui.layoutMode}
      exclusive
      onChange={handleAlignment}
      aria-label="layout mode"
      size="small"
      sx={{ 
        height: 36,
        '& .MuiToggleButton-root': {
          padding: '4px 8px',
        }
      }}
    >
      <ToggleButton value="masonry" aria-label="masonry layout">
        <ViewQuiltIcon fontSize="small" />
      </ToggleButton>
      <ToggleButton value="grid" aria-label="grid layout">
        <DashboardIcon fontSize="small" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
});
