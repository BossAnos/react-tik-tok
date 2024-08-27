import { lazy } from 'react';
import { HeaderOnly } from '~/components/layout';

const Home = lazy(() => import('~/pages/home'));
const Following = lazy(() => import('~/pages/following'));
const Profile = lazy(() => import('~/pages/profile'));
const Upload = lazy(() => import('~/pages/upload'));
const Search = lazy(() => import('~/pages/search'));

// public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

// private routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
