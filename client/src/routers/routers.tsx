import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
])

export default router
