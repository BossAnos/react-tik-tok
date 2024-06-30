import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/components/router/index';
import { DefaultLayout } from '~/components/layout';
import { Fragment } from 'react';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default AppRouter;
