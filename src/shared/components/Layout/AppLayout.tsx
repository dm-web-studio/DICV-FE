import { Outlet } from 'react-router-dom';
import type * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Header } from './Header';
import { Footer } from './Footer';

const AppRoot = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const MainContent = styled('main')({
  flexGrow: 1,
});

export function AppLayout(): React.JSX.Element {
  return (
    <AppRoot>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </AppRoot>
  );
}
