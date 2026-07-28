import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { theme } from './app/theme/theme';
import { AppRoutes } from './app/routes';
import { Toast } from './shared/components/Toast/Toast';
import { ConfirmDialog } from './shared/components/ConfirmDialog';
import { authStore } from './features/auth/store/AuthStore';

const LoadingContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

const App = observer(function App() {
  useEffect(() => {
    authStore.init();

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        authStore.init(true);
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  if (!authStore.isInitialized) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
      <Toast />
      <ConfirmDialog />
    </ThemeProvider>
  );
});

export default App;
