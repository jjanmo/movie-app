import { createBrowserRouter } from 'react-router-dom'
import Favorites from '@pages/Favorites'
import Home from '@pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
])
