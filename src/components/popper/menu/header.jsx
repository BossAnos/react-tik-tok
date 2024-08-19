import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

function Header({ title, onBack }) {
  return (
    <header className={clsx('header')}>
      <button className={clsx('back-btn')}>
        <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
      </button>
      <h4 className={clsx('header-title')}>{title}</h4>
    </header>
  );
}

export default Header;
