import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/404';
import { SidebarProvider } from './contexts/SidebarContext';
import { SearchbarProvider } from './contexts/SearchbarContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Beranda from './pages/beranda';
import Shorts from './pages/shorts';

const router = [
  {
    path: '/',
    element: <Beranda />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/shorts',
    element: <Shorts />,
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <SearchbarProvider>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <Routes>
              {router.map((route, index) => (
                <Route key={index} {...route} />
              ))}
            </Routes>
          </div>
        </SearchbarProvider>
      </BrowserRouter>
    </SidebarProvider>
  </StrictMode>
)
