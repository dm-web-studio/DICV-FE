import { createContext, useContext, useRef, useEffect, type FC, type PropsWithChildren } from 'react';
import { FacultyAdminRootStore } from './FacultyAdminRootStore';

const FacultyAdminStoreContext = createContext<FacultyAdminRootStore | null>(null);

export const FacultyAdminStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useRef(new FacultyAdminRootStore()).current;

  useEffect(() => {
    return () => store.dispose();
  }, [store]);

  return (
    <FacultyAdminStoreContext.Provider value={store}>
      {children}
    </FacultyAdminStoreContext.Provider>
  );
};

export function useFacultyAdminStore(): FacultyAdminRootStore {
  const store = useContext(FacultyAdminStoreContext);
  if (!store) throw new Error('useFacultyAdminStore must be used within FacultyAdminStoreProvider');
  return store;
}
