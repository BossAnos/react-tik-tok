import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/popper';
import './style.scss';
import AccountItem from '~/components/accountItem';

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

  return (
    <header className={clsx('header-wrapper')}>
      <div className={clsx('header-inner')}>
        <img src={images.logo} alt="TikTok" />
        <Tippy
          visible={searchResult.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className={clsx('header-search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h3 className={clsx('header-search-title')}>Account</h3>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={clsx('header-search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={clsx('header-clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={clsx('header-loading')} icon={faSpinner} />

            <button className={clsx('header-search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={clsx('header-actions')}></div>
      </div>
    </header>
  );
}

export default Header;
