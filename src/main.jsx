import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/404';
import { SidebarProvider } from './contexts/SidebarContext';

import Navbar from './components/Navbar';
import SideBar from './components/Sidebar';

import Beranda from './pages/beranda';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Beranda />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/hello',
    element: <div>hello</div>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>
      <Navbar />
      <div className="flex">
        <SideBar />
        <RouterProvider router={router} />
      </div>
    </SidebarProvider>
  </StrictMode>
)
