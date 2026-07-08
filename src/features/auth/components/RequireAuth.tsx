import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { authStore } from '../store/AuthStore';

export const RequireAuth = observer(function RequireAuth() {
  const location = useLocation();

  if (!authStore.isInitialized) {
    return null;
  }

  if (!authStore.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
});
