import { lazy } from 'react';
import { HeaderOnly } from '~/components/layout';
import config from '~/config';
import Home from '~/pages/home';
import Following from '~/pages/following';
import Live from '~/pages/live';

const Profile = lazy(() => import('~/pages/profile'));
const Upload = lazy(() => import('~/pages/upload'));
const Search = lazy(() => import('~/pages/search'));

// public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.live, component: Live },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];

// private routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
