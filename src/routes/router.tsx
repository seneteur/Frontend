/* eslint-disable react-refresh/only-export-components */
import paths, { rootPaths } from './paths';
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainLayout from 'layouts/main-layout';
import Splash from 'components/loader/Splash';
import PageLoader from 'components/loader/PageLoader';
import AuthLayout from 'layouts/auth-layout';

const App = lazy(() => import('App'));
const Dashboard = lazy(() => import('pages/dashboard/Dashbaord'));
const Signin = lazy(() => import('pages/authentication/Signin'));
const Signup = lazy(() => import('pages/authentication/Signup'));
const Settings = lazy(() => import('pages/parametres/index'));
const CreateCasino = lazy(() => import('pages/creer_casino/index'));
const Casino = lazy(() => import('pages/casino/index'));
const CreateKachika = lazy(() => import('pages/creer_kachika/index'));
const Error404 = lazy(() => import('pages/error/Error404'));
const Privateroute = lazy(() => import('./privateroute'));

const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<Splash />}>
          <App />
        </Suspense>
      ),
      errorElement: <Error404 />,
      children: [
        
        {
          path: '/',
          element: (
            <MainLayout>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </MainLayout>
          ),
                errorElement: <Error404 />,

          children: [
            {
              index: true,
              element: (
              <Privateroute>
                <Dashboard />
              </Privateroute>
              
            ),
            },
          ],
        },
        {
          path: rootPaths.pageRoot,
          element:(
            <MainLayout>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </MainLayout>
          ),
          children:[
            {
              path: paths.settings,
              element: (
                <Privateroute>
                 < Settings />
                </Privateroute>
              ),
                
              
            },
            {
              path: paths.create_casino,
              element:  (
                <Privateroute>
                  <CreateCasino />
                </Privateroute>),
            },
            {
              path: paths.create_kachika,
              element: 
               (
                <Privateroute>
                  <CreateKachika />
                </Privateroute>
               )
            },
            {
              path: paths.casino,
              element: 
               (
                <Privateroute>
                  <Casino />
                </Privateroute>
                  )
            }
           
          ]
        },
        {
          path: rootPaths.authRoot,
          element: (
            <AuthLayout>
                <Outlet />
            </AuthLayout>
          ),
          children: [
            {
              path: paths.signin,
              element: <Signin />,
            },
            {
              path: paths.signup,
              element: <Signup />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/admin',
  },
);

export default router;
