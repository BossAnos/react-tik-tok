import { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/popper';
import clsx from 'clsx';
import AccountItem from '~/components/accountItem';
import { SearchIcon } from '~/components/icons';
import { useDebounce } from '~/hook';
import { SearchAllUsersApi } from '~/services/search';
import './search.scss';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  const handleSearchApi = async () => {
    SearchAllUsersApi(debounced).then((res) => {
      setSearchResult(res.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    handleSearchApi();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    <>
      {/* Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. */}
      <div>
        <HeadlessTippy
          interactive
          visible={showResult && searchResult.length > 0}
          render={(attrs) => (
            <div className={clsx('header-search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h3 className={clsx('header-search-title')}>Account</h3>
                {searchResult.map((result) => (
                  <AccountItem key={result.id} data={result} />
                ))}
              </PopperWrapper>
            </div>
          )}
          onClickOutside={handleHideResult}
        >
          <div className={clsx('header-search')}>
            <input
              ref={inputRef}
              value={searchValue}
              placeholder="Search accounts and videos"
              spellCheck={false}
              onChange={handleChange}
              onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !loading && (
              <button className={clsx('header-clear')} onClick={handleClear}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            )}

            {loading && <FontAwesomeIcon className={clsx('header-loading')} icon={faSpinner} />}

            <button className={clsx('header-search-btn')} onMouseDown={(e) => e.preventDefault()}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>
      </div>
    </>
  );
}

export default Search;
