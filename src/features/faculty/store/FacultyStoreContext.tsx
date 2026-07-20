import { createContext, useContext, useState, type FC, type PropsWithChildren } from 'react';
import { FacultyRootStore } from './FacultyRootStore';

const FacultyStoreContext = createContext<FacultyRootStore | null>(null);

export const FacultyStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [store] = useState(() => new FacultyRootStore());
  return <FacultyStoreContext.Provider value={store}>{children}</FacultyStoreContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useFacultyStore(): FacultyRootStore {
  const store = useContext(FacultyStoreContext);
  if (!store) {
    throw new Error('useFacultyStore must be used within a FacultyStoreProvider');
  }
  return store;
}
