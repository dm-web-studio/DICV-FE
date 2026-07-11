import { createContext, useContext, useRef, useEffect, type FC, type PropsWithChildren } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NoticeRootStore } from './NoticeRootStore';

const NoticeStoreContext = createContext<NoticeRootStore | null>(null);

export const NoticeStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<NoticeRootStore | null>(null);
  const isMountedRef = useRef(false);
  const [searchParams] = useSearchParams();

  // Lazy initialization ensures the store is created exactly once,
  // avoiding Strict Mode's double-invocation of useState initializers.
  if (!storeRef.current) {
    const highlight = searchParams.get('highlight');
    storeRef.current = new NoticeRootStore(highlight);
  }

  useEffect(() => {
    isMountedRef.current = true;

    // Failsafe: if it somehow did get disposed, recreate it
    if (storeRef.current?.isDisposed) {
      const highlight = searchParams.get('highlight');
      storeRef.current = new NoticeRootStore(highlight);
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

  return <NoticeStoreContext.Provider value={storeRef.current}>{children}</NoticeStoreContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useNoticeStore(): NoticeRootStore {
  const store = useContext(NoticeStoreContext);
  if (!store) {
    throw new Error('useNoticeStore must be used within NoticeStoreProvider');
  }
  return store;
}
