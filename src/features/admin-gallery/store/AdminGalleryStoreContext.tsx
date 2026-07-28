import { createContext, useContext, useEffect, useRef } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { AdminGalleryRootStore } from './AdminGalleryRootStore';

const AdminGalleryStoreContext = createContext<AdminGalleryRootStore | null>(null);

export const AdminGalleryStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<AdminGalleryRootStore | null>(null);
  const isMountedRef = useRef(false);

  if (!storeRef.current) {
    storeRef.current = new AdminGalleryRootStore();
  }

  useEffect(() => {
    isMountedRef.current = true;

    // Failsafe: if it somehow did get disposed, recreate it
    if (storeRef.current?.isDisposed) {
      storeRef.current = new AdminGalleryRootStore();
    }

    return () => {
      isMountedRef.current = false;
      // Defer disposal by one tick. In React 18 Strict Mode, the component is
      // immediately remounted, which sets isMountedRef back to true and prevents
      // the reactions from being killed unnecessarily.
      setTimeout(() => {
        if (!isMountedRef.current) {
          storeRef.current?.dispose();
        }
      }, 0);
    };
  }, []);

  return (
    <AdminGalleryStoreContext.Provider value={storeRef.current}>
      {children}
    </AdminGalleryStoreContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components

export function useAdminGalleryStore(): AdminGalleryRootStore {
  const store = useContext(AdminGalleryStoreContext);
  if (!store) {
    throw new Error('useAdminGalleryStore must be used within AdminGalleryStoreProvider');
  }
  return store;
}
