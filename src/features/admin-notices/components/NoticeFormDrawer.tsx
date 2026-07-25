import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { useNoticeAdminStore } from '../store/NoticeAdminStoreContext';
import { CharCountTextArea } from '../../../shared/components/CharCountTextArea';
import { MultiImageUploader } from '../../../shared/components/MultiImageUploader';
import { AdminDrawer } from '../../../shared/components/AdminDrawer';
import { NOTICE_CATEGORIES, NOTICE_CATEGORY_LABELS, type NoticeCategory } from '../../../shared/api/apiTypes';
import { DrawerHeaderIcon, SectionTitle, CheckboxLabelContainer } from './NoticeFormDrawer.styles';

export const NoticeFormDrawer = observer(function NoticeFormDrawer() {
  const { ui, domain } = useNoticeAdminStore();
  const isOpen = ui.drawerMode !== 'closed';
  const isEditing = ui.drawerMode === 'edit';

  useEffect(() => {
    if (isOpen) {
      ui.initDraft(isEditing ? domain.selectedNotice : null);
    }
  }, [isOpen, isEditing, domain.selectedNotice, ui]);

  const mockUploadFn = async (file: File) => {
    ui.setDraftFile(file);
    return { url: URL.createObjectURL(file), publicId: 'pending' };
  };

  const handleComplete = (results: { url: string; publicId: string }[]) => {
    setTimeout(() => {
      ui.setDraftImages(results);
    }, 0);
  };

  const handleSave = async () => {
    const fd = ui.getFormData();
    try {
      if (isEditing && ui.selectedId) {
        await domain.updateNotice(ui.selectedId, fd);
      } else {
        await domain.createNotice(fd);
      }
    } catch (err) {
      // Error handled in store
    }
  };

  return (
    <AdminDrawer
      open={isOpen}
      onClose={() => ui.closeDrawer()}
      title={isEditing ? 'Edit Notice' : 'Add Notice'}
      icon={<DrawerHeaderIcon />}
      footerActions={
        <>
          <Button variant="outlined" onClick={() => ui.closeDrawer()}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSave}
            disabled={domain.isSaving || ui.isSaveDisabled}
          >
            {domain.isSaving ? 'Saving...' : 'Save'}
          </Button>
        </>
      }
    >
        <Stack spacing={4}>
          <Box>
            <SectionTitle variant="caption">Basic Details</SectionTitle>
            <Stack spacing={3}>
              <TextField
                label="Title"
                value={ui.draftTitle}
                onChange={(e) => ui.setDraftTitle(e.target.value)}
                fullWidth
                required
                autoFocus
              />
              <TextField
                label="Slug"
                value={ui.draftSlug}
                onChange={(e) => ui.setDraftSlug(e.target.value)}
                fullWidth
                required
              />
              <FormControl fullWidth size="small" margin="dense">
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  value={ui.draftCategory}
                  onChange={(e) => ui.setDraftCategory(e.target.value as NoticeCategory)}
                >
                  {NOTICE_CATEGORIES.map((cat) => (
                    <MenuItem key={cat} value={cat}>{NOTICE_CATEGORY_LABELS[cat]}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Box>
          
          <Divider />
          
          <Box>
            <SectionTitle variant="caption">Content</SectionTitle>
            <Stack spacing={3}>
              <CharCountTextArea
                label="Excerpt"
                value={ui.draftExcerpt}
                onChange={(e) => ui.setDraftExcerpt(e.target.value)}
                minRows={3}
                required
              />
              <CharCountTextArea
                label="Body"
                value={ui.draftBody}
                onChange={(e) => ui.setDraftBody(e.target.value)}
                minRows={6}
                required
              />
            </Stack>
          </Box>
          
          <Divider />

          <Box>
            <SectionTitle variant="caption">Media</SectionTitle>
            <MultiImageUploader
              key={isOpen ? (ui.selectedId || 'create') : 'closed'}
              maxFiles={1}
              existingImages={ui.draftImages.filter(img => img.publicId !== 'pending')}
              uploadFn={mockUploadFn}
              onComplete={handleComplete}
            />
          </Box>
          
          <Divider />

          <Box>
            <SectionTitle variant="caption">Settings</SectionTitle>
            <Stack spacing={1}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={ui.draftIsPinned} 
                    onChange={(e) => ui.setDraftIsPinned(e.target.checked)} 
                    disabled={!ui.draftIsPinned && (isEditing && domain.selectedNotice?.isPinned ? domain.pinnedCount - 1 : domain.pinnedCount) >= 5}
                  />
                }
                label={
                  <CheckboxLabelContainer>
                    Pin to Ticker
                    {!ui.draftIsPinned && (isEditing && domain.selectedNotice?.isPinned ? domain.pinnedCount - 1 : domain.pinnedCount) >= 5 && (
                      <Tooltip title="Maximum of 5 pinned notices reached. Unpin an existing notice to pin this one." arrow placement="right">
                        <InfoOutlinedIcon fontSize="small" color="action" />
                      </Tooltip>
                    )}
                  </CheckboxLabelContainer>
                }
              />
              <FormControlLabel
                control={<Checkbox checked={ui.draftShowAsPopup} onChange={(e) => ui.setDraftShowAsPopup(e.target.checked)} />}
                label={
                  <CheckboxLabelContainer>
                    Show as Popup
                    {ui.draftShowAsPopup && (
                      <Tooltip title="Only one notice can be shown as a popup at a time. Saving this will disable any previously active popup notice." arrow placement="right">
                        <InfoOutlinedIcon fontSize="small" color="primary" />
                      </Tooltip>
                    )}
                  </CheckboxLabelContainer>
                }
              />
            </Stack>
          </Box>
        </Stack>
    </AdminDrawer>
  );
});
