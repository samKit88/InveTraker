import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import ProtectedRoutes from '../Layout/ProtectedRoutes'
import Inventory from '../pages/Inventory'
import PublicRoutes from '../Layout/PublicRoutes'
import Product from '../pages/Product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    element: <PublicRoutes />,
    children: [
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'Inventory',
            element: <Inventory />,
          },
          {
            path: 'Product',
            element: <Product />,
          },
        ],
      },
    ],
  },
])

export default router
