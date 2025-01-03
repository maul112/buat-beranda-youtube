import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/404'
import Beranda from './pages/beranda'
import Navbar from './components/layout/navbar'
import SideBar from './components/layout/SideBar'
import { SidebarProvider } from './contexts/SidebarContext'

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
      <div>
        <Navbar />
        <div className="flex flex-col flex-1">
          <SideBar />
          <RouterProvider router={router} />
        </div>
      </div>
    </SidebarProvider>
  </StrictMode>,
)
