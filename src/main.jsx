import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, createBrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/404';
import { SidebarProvider } from './contexts/SidebarContext';
import { SearchbarProvider } from './contexts/SearchbarContext';
import Navbar from './components/Navbar';
import SideBar from './components/Sidebar';
import Beranda from './pages/beranda';
import Short from './pages/short'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Beranda />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/short',
    element: <Short />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <SearchbarProvider>
          <Navbar />
          <div className="flex">
            <SideBar />
            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/shorts" element={<Short />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </div>
        </SearchbarProvider>
      </BrowserRouter>
    </SidebarProvider>
  </StrictMode>
)
