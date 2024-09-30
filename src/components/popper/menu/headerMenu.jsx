import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import PropTypes from 'prop-types';

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

Header.prototype = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Header;
