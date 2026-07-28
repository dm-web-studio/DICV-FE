import { createContext, useContext, useRef, type FC, type PropsWithChildren } from 'react';
import { AdmissionRootStore } from './AdmissionRootStore';

const AdmissionStoreContext = createContext<AdmissionRootStore | null>(null);

export const AdmissionStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useRef(new AdmissionRootStore()).current;
  return <AdmissionStoreContext.Provider value={store}>{children}</AdmissionStoreContext.Provider>;
};

export function useAdmissionStore(): AdmissionRootStore {
  const store = useContext(AdmissionStoreContext);
  if (!store) throw new Error('useAdmissionStore must be used within AdmissionStoreProvider');
  return store;
}
