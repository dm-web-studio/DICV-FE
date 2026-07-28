import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from '../shared/pages/ErrorPage';
import { NotFoundPage } from '../shared/pages/NotFoundPage';

import { LoginPage } from '../features/auth/pages/LoginPage';
import { ForgotPasswordPage } from '../features/auth/pages/ForgotPasswordPage';
import { ResetPasswordPage } from '../features/auth/pages/ResetPasswordPage';
import { RequireAuth } from '../features/auth/components/RequireAuth';
import { AppLayout } from '../shared/components/Layout/AppLayout';
import NoticesPage from '../features/notices/pages/NoticesPage';
import PrincipalDeskPage from '../features/staff-desk/pages/PrincipalDeskPage';
import PresidentDeskPage from '../features/staff-desk/pages/PresidentDeskPage';
import VicePrincipalDeskPage from '../features/staff-desk/pages/VicePrincipalDeskPage';

import AdmissionPage from '../features/admission/pages/AdmissionPage';
import ContactPage from '../features/contact/pages/ContactPage';
import { AboutPage } from '../features/about/pages/AboutPage';
import { HomePage } from '../features/home/pages/HomePage';
import GalleryPage from '../features/gallery/pages/GalleryPage';
import AlbumDetailPage from '../features/gallery/pages/AlbumDetailPage';
import FacultyPage from '../features/faculty/pages/FacultyPage';
import NoticeAdminPage from '../features/admin-notices/pages/NoticeAdminPage';
import FacultyAdminPage from '../features/admin-faculty/pages/FacultyAdminPage';
import StaffDeskAdminPage from '../features/admin-staff-desk/pages/StaffDeskAdminPage';
import AdminGalleryPage from '../features/admin-gallery/pages/AdminGalleryPage';
import AdminContactPage from '../features/admin-contact/pages/AdminContactPage';
import { DashboardAdminPage } from '../features/admin-dashboard/components/DashboardAdminPage';
import { AdminLayout } from '../shared/components/AdminLayout/AdminLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'principals-desk', element: <PrincipalDeskPage /> },
      { path: 'presidents-desk', element: <PresidentDeskPage /> },
      { path: 'vice-principals-desk', element: <VicePrincipalDeskPage /> },
      { path: 'admission', element: <AdmissionPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'gallery/:slug', element: <AlbumDetailPage /> },
      { path: 'faculty', element: <FacultyPage /> },
      { path: 'notices', element: <NoticesPage /> },
      { path: 'notices/:slug', element: <NoticesPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
  {
    path: '/admin/login',
    element: <LoginPage />,
  },
  {
    path: '/admin/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/admin/reset-password/:token',
    element: <ResetPasswordPage />,
  },
  {
    path: '/admin',
    element: (
      <RequireAuth>
        <AdminLayout />
      </RequireAuth>
    ),
    children: [
      { index: true, element: <DashboardAdminPage /> },
      { path: 'notices', element: <NoticeAdminPage /> },
      { path: 'faculty', element: <FacultyAdminPage /> },
      { path: 'staff-desk', element: <StaffDeskAdminPage /> },
      { path: 'gallery', element: <AdminGalleryPage /> },
      { path: 'contacts', element: <AdminContactPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
