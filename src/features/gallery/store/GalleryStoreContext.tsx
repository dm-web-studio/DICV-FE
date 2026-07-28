import { createContext, useContext, useRef, type FC, type PropsWithChildren } from 'react';
import { GalleryRootStore } from './GalleryRootStore';

const GalleryStoreContext = createContext<GalleryRootStore | null>(null);

export const GalleryStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useRef(new GalleryRootStore()).current;
  return <GalleryStoreContext.Provider value={store}>{children}</GalleryStoreContext.Provider>;
};

export function useGalleryStore(): GalleryRootStore {
  const store = useContext(GalleryStoreContext);
  if (!store) throw new Error('useGalleryStore must be used within GalleryStoreProvider');
  return store;
}
