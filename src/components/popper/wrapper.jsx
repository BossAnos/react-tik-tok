import clsx from 'clsx';
import './popper.scss';

function Wrapper({ children, className }) {
  return <div className={clsx('popper-wrapper', className)}>{children}</div>;
}

export default Wrapper;
