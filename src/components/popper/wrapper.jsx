import clsx from 'clsx';
import PropTypes from 'prop-types';
import './popper.scss';

function Wrapper({ children, className }) {
  return <div className={clsx('popper-wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Wrapper;
