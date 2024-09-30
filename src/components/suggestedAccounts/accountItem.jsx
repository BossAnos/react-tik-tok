import clsx from 'clsx';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../popper';
import AccountPreview from './accountPreview';
import Image from '../image/image';
import './suggestedAccounts.scss';

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
        <div className={clsx('account-item')}>
          <Image
            className={clsx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/dc461dc3c4b4267d8c11ae6879bf6d25.jpeg?lk3s=a5d48078&nonce=37374&refresh_token=0b6456873bc4ad21b3774ea8f78897fd&x-expires=1727280000&x-signature=0n29AGtbzKE17GyLM67OEQHT41s%3D&shp=a5d48078&shcp=81f88b70"
            alt="Nguyen Thanh Hung"
          />
          <div className={clsx('item-info')}>
            <p className={clsx('nickname')}>
              <strong>hungnguyenthanh</strong>
              <FontAwesomeIcon className={clsx('check')} icon={faCheckCircle} />
            </p>
            <p className={clsx('name')}>Nguyễn Thành Hưng</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
