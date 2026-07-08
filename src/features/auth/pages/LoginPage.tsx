import { Navigate, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { LoginForm } from '../components/LoginForm';
import { authStore } from '../store/AuthStore';

const PageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
}));

export const LoginPage = observer(function LoginPage() {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  if (!authStore.isInitialized) {
    return null;
  }

  if (authStore.isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  return (
    <PageContainer>
      <LoginForm />
    </PageContainer>
  );
});
