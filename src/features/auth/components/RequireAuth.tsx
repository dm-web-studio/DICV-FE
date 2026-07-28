import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { authStore } from '../store/AuthStore';
import type { ReactNode } from 'react';

export const RequireAuth = observer(function RequireAuth({ children }: { children?: ReactNode }) {
  const location = useLocation();

  if (!authStore.isInitialized) {
    return null;
  }

  if (!authStore.isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
});
