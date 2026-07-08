import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './app/theme/theme';
import { AppRoutes } from './app/routes';
import { Toast } from './shared/components/Toast/Toast';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
      <Toast />
    </ThemeProvider>
  );
}

export default App;
