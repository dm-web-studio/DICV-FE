import { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import type * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import { Header } from './Header';
import { Footer } from './Footer';
import { siteSettingsStore } from '../../stores/SiteSettingsStore';

const AppRoot = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const MainContent = styled('main')({
  flexGrow: 1,
});

export const AppLayout = observer(function AppLayout(): React.JSX.Element {
  useEffect(() => {
    void siteSettingsStore.fetchSettings();
  }, []);

  return (
    <AppRoot>
      <ScrollRestoration />
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </AppRoot>
  );
});
