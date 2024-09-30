import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/image/image';
import Button from '~/components/button/button';
import './accountPreview.scss';

function AccountPreview() {
  return (
    <div className={clsx('account-preview-wrapper')}>
      <div className={clsx('account-preview-header')}>
        <Image
          className={clsx('account-preview-avatar')}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/dc461dc3c4b4267d8c11ae6879bf6d25.jpeg?lk3s=a5d48078&nonce=37374&refresh_token=0b6456873bc4ad21b3774ea8f78897fd&x-expires=1727280000&x-signature=0n29AGtbzKE17GyLM67OEQHT41s%3D&shp=a5d48078&shcp=81f88b70"
          alt="Nguyen Thanh Hung"
        />
        <Button className={clsx('account-preview-follow-btn')} primary>
          Follow
        </Button>
      </div>

      <div className={clsx('account-preview-body')}>
        <p className={clsx('account-preview-nickname')}>
          <strong>hungnguyenthanh</strong>
          <FontAwesomeIcon className={clsx('account-preview-check')} icon={faCheckCircle} />
        </p>
        <p className={clsx('account-preview-name')}>Nguyễn Thành Hưng</p>
        <p className={clsx('account-preview-analytics')}>
          <strong className={clsx('account-preview-value')}>8.2M </strong>
          <span className={clsx('account-preview-label')}>Followers</span>
          <strong className={clsx('account-preview-value')}>8.2M </strong>
          <span className={clsx('account-preview-label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
