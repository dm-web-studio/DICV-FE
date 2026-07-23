import { observer } from 'mobx-react-lite';
import { Box, Typography, Button, TextField, InputAdornment, Divider } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon, PhotoAlbum as AlbumIcon } from '@mui/icons-material';
import { useAdminGalleryStore } from '../store/AdminGalleryStoreContext';
import { 
  ListPanelContainer, 
  ListHeader, 
  ListScrollArea, 
  AlbumCard, 
  Thumbnail,
  AlbumNameText,
  EmptyStateText,
  ListFooterText 
} from './AlbumListPanel.styles';

export const AlbumListPanel = observer(function AlbumListPanel() {
  const { ui, domain } = useAdminGalleryStore();

  return (
    <ListPanelContainer>
      <ListHeader>
        <Typography variant="h2">Albums</Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />} 
          onClick={() => ui.openAddAlbumDialog()}
          size="small"
        >
          Add Album
        </Button>
      </ListHeader>

      <TextField
        fullWidth
        placeholder="Search albums..."
        value={ui.albumSearchQuery}
        onChange={(e) => ui.setAlbumSearchQuery(e.target.value)}
        size="small"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }
        }}
      />

      <Divider />

      <ListScrollArea>
        {domain.filteredAlbums.map(album => (
          <AlbumCard 
            key={album.slug} 
            elevation={0}
            selected={ui.selectedAlbumSlug === album.slug}
            onClick={() => ui.setSelectedAlbumSlug(album.slug)}
          >
            <Thumbnail 
              sx={album.coverImageUrl ? { backgroundImage: `url(${album.coverImageUrl})` } : {}}
            >
              {!album.coverImageUrl && <AlbumIcon color="action" />}
            </Thumbnail>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <AlbumNameText 
                variant="h3" 
                noWrap 
                selected={ui.selectedAlbumSlug === album.slug}
              >
                {album.name}
              </AlbumNameText>
              <Typography variant="caption" color="text.secondary">
                {album.imageCount} Photos
              </Typography>
            </Box>
          </AlbumCard>
        ))}
        {domain.filteredAlbums.length === 0 && (
          <EmptyStateText variant="body2" color="text.secondary">
            No albums found.
          </EmptyStateText>
        )}
      </ListScrollArea>

      <Divider />
      
      <ListFooterText variant="caption" color="text.secondary">
        {domain.filteredAlbums.length} {domain.filteredAlbums.length === 1 ? 'Album' : 'Albums'}
      </ListFooterText>
    </ListPanelContainer>
  );
});
