import React, { useEffect, useState } from 'react';

export const FALLBACK_IMAGE = '/images/placeholder.svg';

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export const SmartImage: React.FC<Props> = ({ src, alt = '', loading = 'lazy', onError, ...rest }) => {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  return (
    <img
      {...rest}
      src={failed || !src ? FALLBACK_IMAGE : src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={(e) => {
        setFailed(true);
        onError?.(e);
      }}
    />
  );
};
