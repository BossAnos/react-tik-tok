import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from '~/components/popper';
import MenuItem from './menuItem';
import HeaderMenu from './headerMenu';
import './menu.scss';

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onchange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onchange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs) => {
    <div className={clsx('menu-list')} tabIndex="-1" {...attrs}>
      <PopperWrapper className={clsx('menu-popper')}>
        {history.length > 1 && <HeaderMenu title={current.title} onBack={handleBack} />}
        <div className={clsx('menu-body')}>{renderItems()}</div>
      </PopperWrapper>
    </div>;
  };

  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
