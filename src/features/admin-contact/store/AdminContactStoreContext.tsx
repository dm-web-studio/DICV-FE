import { createContext, useContext, useEffect, useRef, type FC, type PropsWithChildren } from 'react';
import { AdminContactRootStore } from './AdminContactRootStore';

const AdminContactStoreContext = createContext<AdminContactRootStore | null>(null);

export const AdminContactStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useRef(new AdminContactRootStore()).current;

  useEffect(() => {
    store.init();
    return () => store.dispose();
  }, [store]);

  return (
    <AdminContactStoreContext.Provider value={store}>
      {children}
    </AdminContactStoreContext.Provider>
  );
};

export function useAdminContactStore(): AdminContactRootStore {
  const store = useContext(AdminContactStoreContext);
  if (!store) {
    throw new Error('useAdminContactStore must be used within AdminContactStoreProvider');
  }
  return store;
}
