import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

function AccountItem() {
  return (
    <div className={clsx('account-item-wrapper')}>
      <img
        className={clsx('account-item-avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&nonce=6815&refresh_token=2a37badb961c49f76647016becf7b18d&x-expires=1720288800&x-signature=pRf%2BADLm2juABu0o8LR0o%2F6NXv0%3D&shp=a5d48078&shcp=81f88b70"
        alt="Hoaa"
      />

      <div className={clsx('account-item-info')}>
        <h4 className={clsx('account-item-name')}>
          <span>Nguyễn Thành Hưng</span>
          <FontAwesomeIcon className={clsx('account-item-check')} icon={faCheckCircle} />
        </h4>
        <span className={clsx('account-item-username')}>hungnt</span>
      </div>
    </div>
  );
}

export default AccountItem;
