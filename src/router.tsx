import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import AppLayout from './layouts/app-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      // 404 page
      {
        path: '/*',
        element: <p>Not found</p>,
      },
    ],
  },
]);

export { router };
