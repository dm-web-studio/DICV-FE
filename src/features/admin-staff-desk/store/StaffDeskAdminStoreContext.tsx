import { createContext, useContext, useRef, type FC, type PropsWithChildren } from 'react';
import { StaffDeskAdminUIStore } from './StaffDeskAdminUIStore';
import { StaffDeskAdminDomainStore } from './StaffDeskAdminDomainStore';

export class StaffDeskAdminRootStore {
  ui: StaffDeskAdminUIStore;
  domain: StaffDeskAdminDomainStore;

  constructor() {
    this.ui = new StaffDeskAdminUIStore();
    this.domain = new StaffDeskAdminDomainStore(this.ui);
  }
}

const StaffDeskAdminStoreContext = createContext<StaffDeskAdminRootStore | null>(null);

export const StaffDeskAdminStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useRef(new StaffDeskAdminRootStore()).current;
  return <StaffDeskAdminStoreContext.Provider value={store}>{children}</StaffDeskAdminStoreContext.Provider>;
};

export function useStaffDeskAdminStore(): StaffDeskAdminRootStore {
  const store = useContext(StaffDeskAdminStoreContext);
  if (!store) throw new Error('useStaffDeskAdminStore must be used within StaffDeskAdminStoreProvider');
  return store;
}
