import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainPage } from '../pages/MainPage';
import { Login } from '../pages/Login';
import { AboutUs } from '../pages/AboutUs';
import { Response } from '../pages/Response';
import { User } from '../pages/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/aboutus',
    element: <AboutUs />,
  },
  {
    path: '/response',
    element: <Response />,
  },
  {
    path: '/user',
    element: <User />,
  }
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;
