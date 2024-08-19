import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { Wrapper as PopperWrapper } from '~/components/popper';
import MenuItem from './menuItem';
import Header from './header';
import './menu.scss';

const defaultFn = () => {};

function Menu({ children, items = [], onchange = defaultFn }) {
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

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={clsx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={clsx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
