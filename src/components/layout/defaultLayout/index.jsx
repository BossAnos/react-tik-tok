import Header from '~/components/header';
import Sidebar from './sidebar';
import clsx from 'clsx';
import './defaultLayout.scss';

function DefaultLayout({ children }) {
  return (
    <div className={clsx('layout-wrapper')}>
      <Header />
      <div className={clsx('layout-container')}>
        <Sidebar />
        <div className={clsx('layout-content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
