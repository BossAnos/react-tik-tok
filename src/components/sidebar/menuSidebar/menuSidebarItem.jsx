import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import './menuSidebar.scss';

function MenuSidebarItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink className={(nav) => clsx('menu-sidebar-item-item', { active: nav.isActive })} to={to}>
      <span className={clsx('menu-sidebar-item-icon')}>{icon}</span>
      <span className={clsx('menu-sidebar-item-active-icon')}>{activeIcon}</span>
      <span className={clsx('menu-sidebar-item-title')}>{title}</span>
    </NavLink>
  );
}

MenuSidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};

export default MenuSidebarItem;
