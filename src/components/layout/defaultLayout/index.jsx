import clsx from 'clsx';
import PropTypes from 'prop-types';
import Header from '~/components/header';
import Sidebar from './sidebar';
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

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
