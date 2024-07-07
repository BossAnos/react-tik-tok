import clsx from 'clsx';
import './popper.scss';

function Wrapper({ children }) {
  return <div className={clsx('popper-wrapper')}>{children}</div>;
}

export default Wrapper;
