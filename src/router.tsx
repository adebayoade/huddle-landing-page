import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/*',
    element: <p>Not found!</p>,
  },
]);

export { router };
