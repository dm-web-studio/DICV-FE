import { AdminGalleryStoreProvider } from '../store/AdminGalleryStoreContext';
import { AdminGalleryLayout } from '../components/AdminGalleryLayout';

export default function AdminGalleryPage() {
  return (
    <AdminGalleryStoreProvider>
      <AdminGalleryLayout />
    </AdminGalleryStoreProvider>
  );
}
