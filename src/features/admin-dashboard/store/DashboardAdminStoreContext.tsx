import { createContext, useContext, useEffect, useRef, type FC, type PropsWithChildren } from 'react';
import { DashboardAdminRootStore } from './DashboardAdminRootStore';

const DashboardAdminStoreContext = createContext<DashboardAdminRootStore | null>(null);

export const DashboardAdminStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useRef(new DashboardAdminRootStore()).current;

  useEffect(() => {
    return () => store.dispose();
  }, [store]);

  return (
    <DashboardAdminStoreContext.Provider value={store}>
      {children}
    </DashboardAdminStoreContext.Provider>
  );
};

export function useDashboardAdminStore(): DashboardAdminRootStore {
  const store = useContext(DashboardAdminStoreContext);
  if (!store) {
    throw new Error('useDashboardAdminStore must be used within DashboardAdminStoreProvider');
  }
  return store;
}
