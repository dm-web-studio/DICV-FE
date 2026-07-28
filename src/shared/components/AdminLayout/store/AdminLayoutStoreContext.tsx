import { createContext, useContext, useRef } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { AdminLayoutStore } from './AdminLayoutStore';

const AdminLayoutStoreContext = createContext<AdminLayoutStore | null>(null);

export const AdminLayoutStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useRef(new AdminLayoutStore()).current;
  return (
    <AdminLayoutStoreContext.Provider value={store}>
      {children}
    </AdminLayoutStoreContext.Provider>
  );
};

export function useAdminLayoutStore(): AdminLayoutStore {
  const store = useContext(AdminLayoutStoreContext);
  if (!store) {
    throw new Error('useAdminLayoutStore must be used within AdminLayoutStoreProvider');
  }
  return store;
}
