import { forwardRef, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import images from '~/assets/images';
import './image.scss';

const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={clsx('image-wrapper', className)}
      ref={ref}
      src={src || fallback}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
