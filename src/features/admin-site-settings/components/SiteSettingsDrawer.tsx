import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Drawer, Box, IconButton, TextField, Stack, Button, CircularProgress } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useAdminLayoutStore } from '../../../shared/components/AdminLayout/store/AdminLayoutStoreContext';
import { siteSettingsAdminStore, SETTINGS_CONFIG } from '../store/SiteSettingsAdminStore';
import { type SiteSettings } from '../../../shared/services/siteSettingsService';
import { 
  DrawerHeader, 
  DrawerTitle, 
  SectionHeader, 
  SectionContainer, 
  DrawerFooter 
} from './SiteSettingsDrawer.styles';

export const SiteSettingsDrawer = observer(function SiteSettingsDrawer() {
  const layoutStore = useAdminLayoutStore();
  const { isSettingsDrawerOpen } = layoutStore;
  const store = siteSettingsAdminStore;

  // Initialize draft settings when the drawer opens
  useEffect(() => {
    if (isSettingsDrawerOpen) {
      void store.initFromGlobal();
    }
  }, [isSettingsDrawerOpen, store]);

  const handleClose = () => {
    layoutStore.closeSettingsDrawer();
  };

  const handleSave = async () => {
    const success = await store.saveSettings();
    if (success) {
      handleClose();
    }
  };

  const { draftSettings, isSaving } = store;

  return (
    <Drawer 
      anchor="right" 
      open={isSettingsDrawerOpen} 
      onClose={handleClose}
      sx={{ '& .MuiDrawer-paper': { width: 400 } }}
    >
      <DrawerHeader>
        <DrawerTitle>Site Settings</DrawerTitle>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </DrawerHeader>

      <Box sx={{ flex: 1, overflowY: 'auto', p: 3 }}>
        {SETTINGS_CONFIG.map((sectionConfig) => (
          <SectionContainer key={sectionConfig.section}>
            <SectionHeader>{sectionConfig.section}</SectionHeader>
            <Stack spacing={3}>
              {sectionConfig.fields.map((field) => {
                let value: string | number = '';
                let onChange = (_val: string) => {};
                
                if (field.category === 'general') {
                  value = draftSettings[field.key as keyof SiteSettings] as string;
                  onChange = (val) => store.updateField(field.key as keyof SiteSettings, val);
                } else if (field.category === 'stat') {
                  value = draftSettings.stats[field.key as keyof SiteSettings['stats']];
                  onChange = (val) => store.updateStat(field.key as keyof SiteSettings['stats'], parseInt(val) || 0);
                } else if (field.category === 'social') {
                  value = store.getSocialLink(field.key);
                  onChange = (val) => store.updateSocialLink(field.key, val);
                }

                return (
                  <TextField
                    key={field.key}
                    label={field.label}
                    type={field.type === 'number' ? 'number' : 'text'}
                    multiline={field.type === 'multiline'}
                    rows={field.type === 'multiline' ? 2 : undefined}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    fullWidth
                    slotProps={field.type === 'number' ? { htmlInput: { min: 0 } } : undefined}
                  />
                );
              })}
            </Stack>
          </SectionContainer>
        ))}
      </Box>

      <DrawerFooter>
        <Button onClick={handleClose} color="inherit" disabled={isSaving}>
          Cancel
        </Button>
        <Button 
          variant="contained" 
          onClick={handleSave} 
          disabled={isSaving}
          startIcon={isSaving ? <CircularProgress size={16} color="inherit" /> : null}
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </Button>
      </DrawerFooter>
    </Drawer>
  );
});
