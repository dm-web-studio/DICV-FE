import { createContext, useContext, useRef, type FC, type PropsWithChildren } from 'react';
import { HomeRootStore } from './HomeRootStore';

const HomeStoreContext = createContext<HomeRootStore | null>(null);

export const HomeStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<HomeRootStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = new HomeRootStore();
  }

  return (
    <HomeStoreContext.Provider value={storeRef.current}>
      {children}
    </HomeStoreContext.Provider>
  );
};

export function useHomeStore(): HomeRootStore {
  const store = useContext(HomeStoreContext);
  if (!store) {
    throw new Error('useHomeStore must be used within a HomeStoreProvider');
  }
  return store;
}
