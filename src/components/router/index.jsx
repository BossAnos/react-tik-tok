import { lazy } from 'react';
import { HeaderOnly } from '~/components/layout';
import config from '~/config';

const Home = lazy(() => import('~/pages/home'));
const Following = lazy(() => import('~/pages/following'));
const Profile = lazy(() => import('~/pages/profile'));
const Upload = lazy(() => import('~/pages/upload'));
const Search = lazy(() => import('~/pages/search'));

// public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];

// private routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
