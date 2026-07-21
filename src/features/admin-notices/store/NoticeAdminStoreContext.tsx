import { createContext, useContext, useEffect, useRef, type FC, type PropsWithChildren } from 'react';
import { NoticeAdminRootStore } from './NoticeAdminRootStore';

const NoticeAdminStoreContext = createContext<NoticeAdminRootStore | null>(null);

export const NoticeAdminStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useRef(new NoticeAdminRootStore()).current;

  useEffect(() => {
    store.init();
    return () => store.dispose();
  }, [store]);

  return <NoticeAdminStoreContext.Provider value={store}>{children}</NoticeAdminStoreContext.Provider>;
};

export function useNoticeAdminStore(): NoticeAdminRootStore {
  const store = useContext(NoticeAdminStoreContext);
  if (!store) throw new Error('useNoticeAdminStore must be used within NoticeAdminStoreProvider');
  return store;
}
