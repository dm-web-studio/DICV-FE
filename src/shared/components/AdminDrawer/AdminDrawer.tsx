import React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { DrawerHeader, DrawerContent, DrawerFooter } from './AdminDrawer.styles';

export interface AdminDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  footerActions?: React.ReactNode;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  open,
  onClose,
  title,
  icon,
  children,
  footerActions,
}) => {
  return (
    <Drawer
      anchor="right"
      variant="persistent"
      open={open}
      sx={{
        width: open ? 560 : 0,
        flexShrink: 0,
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '& .MuiDrawer-paper': {
          width: 560,
          position: 'static',
          height: '100%',
          borderLeft: (theme) => `1px solid ${theme.palette.divider}`,
          borderRight: 'none',
          borderTop: 'none',
          borderBottom: 'none',
          overflow: 'hidden',
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <DrawerHeader>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {icon && (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {icon}
            </Box>
          )}
          <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 700 }}>
            {title}
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small" sx={{ bgcolor: 'background.paper' }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </DrawerHeader>

      <DrawerContent>{children}</DrawerContent>

      {footerActions && <DrawerFooter>{footerActions}</DrawerFooter>}
    </Drawer>
  );
};
