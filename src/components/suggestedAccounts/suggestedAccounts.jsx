import PropTypes from 'prop-types';
import clsx from 'clsx';
import AccountItem from './accountItem';
import './suggestedAccounts.scss';

function SuggestedAccounts({ label }) {
  return (
    <div className={clsx('suggest-account-wrapper')}>
      <p className={clsx('suggest-account-label')}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={clsx('suggest-account-more-btn')}>See all</p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
