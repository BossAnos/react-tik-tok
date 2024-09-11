import { lazy } from 'react';
import { HeaderOnly } from '~/components/layout';
import routesConfig from '~/utils/config';

const Home = lazy(() => import('~/pages/home'));
const Following = lazy(() => import('~/pages/following'));
const Profile = lazy(() => import('~/pages/profile'));
const Upload = lazy(() => import('~/pages/upload'));
const Search = lazy(() => import('~/pages/search'));

// public routes
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];

// private routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
