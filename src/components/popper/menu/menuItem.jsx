import clsx from 'clsx';
import Button from '~/components/button';
import './menu.scss';

function MenuItem({ data, onClick }) {
  const classes = clsx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
