import { createContext, useContext, useRef, type FC, type PropsWithChildren } from 'react';
import { ContactRootStore } from './ContactRootStore';

const ContactStoreContext = createContext<ContactRootStore | null>(null);

export const ContactStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useRef(new ContactRootStore()).current;
  return <ContactStoreContext.Provider value={store}>{children}</ContactStoreContext.Provider>;
};

export function useContactStore(): ContactRootStore {
  const store = useContext(ContactStoreContext);
  if (!store) throw new Error('useContactStore must be used within ContactStoreProvider');
  return store;
}
