import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import "./account-item.scss";

function AccountItem() {
  return (
    <div className={clsx('account-item-wrapper')}>
      <img
        className={clsx('account-item-avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&nonce=79776&refresh_token=9c94a3e51d7b68aa47117c64f70eb5fb&x-expires=1720537200&x-signature=bDPNaIyfN6BMpEfBrs3vBjDxQfM%3D&shp=a5d48078&shcp=81f88b70"
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
