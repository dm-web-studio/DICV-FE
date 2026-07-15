import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Placeholder } from '../pages/Placeholder';
import { LoginPage } from '../features/auth/pages/LoginPage';
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


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'principals-desk', element: <PrincipalDeskPage /> },
      { path: 'presidents-desk', element: <PresidentDeskPage /> },
      { path: 'vice-principals-desk', element: <VicePrincipalDeskPage /> },
      { path: 'admission', element: <AdmissionPage /> },
      { path: 'fees', element: <Placeholder title="Fees" /> },
      { path: 'gallery', element: <Placeholder title="Gallery" /> },
      { path: 'notices', element: <NoticesPage /> },
      { path: 'notices/:slug', element: <NoticesPage /> },
      { path: 'holidays', element: <Placeholder title="Holidays" /> },
      { path: 'annual-exam', element: <Placeholder title="Annual Exam" /> },
      { path: 'half-yearly-exam', element: <Placeholder title="Half-Yearly Exam" /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/admin',
    element: <RequireAuth />,
    children: [
      { index: true, element: <Placeholder title="Admin Dashboard" /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
