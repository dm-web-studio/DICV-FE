import { createContext, useContext, useRef, useEffect, type FC, type PropsWithChildren } from 'react';
import { StaffDeskRootStore } from './StaffDeskRootStore';

const StaffDeskStoreContext = createContext<StaffDeskRootStore | null>(null);

export const StaffDeskStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<StaffDeskRootStore | null>(null);
  const isMountedRef = useRef(false);

  if (!storeRef.current) {
    storeRef.current = new StaffDeskRootStore();
  }

  useEffect(() => {
    isMountedRef.current = true;

    if (storeRef.current?.isDisposed) {
      storeRef.current = new StaffDeskRootStore();
    }

    return () => {
      isMountedRef.current = false;
      setTimeout(() => {
        if (!isMountedRef.current) {
          storeRef.current?.dispose();
        }
      }, 0);
    };
  }, []);

  return <StaffDeskStoreContext.Provider value={storeRef.current}>{children}</StaffDeskStoreContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useStaffDeskStore(): StaffDeskRootStore {
  const store = useContext(StaffDeskStoreContext);
  if (!store) {
    throw new Error('useStaffDeskStore must be used within StaffDeskStoreProvider');
  }
  return store;
}
