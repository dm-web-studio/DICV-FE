import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Placeholder } from '../pages/Placeholder';

function Layout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Placeholder title="Home" /> },
      { path: 'about', element: <Placeholder title="About" /> },
      { path: 'principals-desk', element: <Placeholder title="Principal's Desk" /> },
      { path: 'presidents-desk', element: <Placeholder title="President's Desk" /> },
      { path: 'admission-procedure', element: <Placeholder title="Admission Procedure" /> },
      { path: 'fees', element: <Placeholder title="Fees" /> },
      { path: 'gallery', element: <Placeholder title="Gallery" /> },
      { path: 'notice-board', element: <Placeholder title="Notice Board" /> },
      { path: 'notice-board/:slug', element: <Placeholder title="Notice Detail" /> },
      { path: 'holidays', element: <Placeholder title="Holidays" /> },
      { path: 'annual-exam', element: <Placeholder title="Annual Exam" /> },
      { path: 'half-yearly-exam', element: <Placeholder title="Half-Yearly Exam" /> },
      { path: 'contact', element: <Placeholder title="Contact" /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
