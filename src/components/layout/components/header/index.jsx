import clsx from 'clsx';
import styles from './style.scss';

function Header() {
  return (
    <header className={clsx('header-wrapper')}>
      <div className={clsx('header-inner')}></div>
    </header>
  );
}

export default Header;
