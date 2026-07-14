import { createContext, useContext, useState, type FC, type PropsWithChildren, useEffect } from 'react';
import { AboutRootStore } from './AboutRootStore';

const AboutStoreContext = createContext<AboutRootStore | null>(null);

export const AboutStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [store] = useState(() => new AboutRootStore());
  
  useEffect(() => {
    return () => store.dispose();
  }, [store]);

  return <AboutStoreContext.Provider value={store}>{children}</AboutStoreContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAboutStore(): AboutRootStore {
  const store = useContext(AboutStoreContext);
  if (!store) throw new Error('useAboutStore must be used within AboutStoreProvider');
  return store;
}


