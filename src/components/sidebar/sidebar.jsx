import clsx from 'clsx';
import config from '~/config';
import MenuSidebar from './menuSidebar/menuSidebar';
import { MenuSidebarItem } from './menuSidebar';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '../icons';
import SuggestedAccounts from '../suggestedAccounts';
import './sidebar.scss';

function Sidebar() {
  return (
    <aside className={clsx('sidebar-wrapper')}>
      <MenuSidebar>
        <MenuSidebarItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuSidebarItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuSidebarItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </MenuSidebar>

      <SuggestedAccounts label="Suggested accounts" />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
