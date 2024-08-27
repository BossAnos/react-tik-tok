import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Image from '~/components/image';
import './account-item.scss';

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={clsx('account-item-wrapper')}>
      <Image className={clsx('account-item-avatar')} src={data.avatar} alt={data.full_name} />
      <div className={clsx('account-item-info')}>
        <h4 className={clsx('account-item-name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={clsx('account-item-check')} icon={faCheckCircle} />}
        </h4>
        <span className={clsx('account-item-username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
