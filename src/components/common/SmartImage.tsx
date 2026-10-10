import React, { useEffect, useState } from 'react';

export const FALLBACK_IMAGE = '/images/placeholder.svg';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fetchPriority?: 'high' | 'low' | 'auto';
};

export const SmartImage: React.FC<Props> = ({ src, alt = '', loading = 'lazy', onError, fetchPriority, ...rest }) => {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  const priorityAttr = fetchPriority ? ({ fetchpriority: fetchPriority } as Record<string, string>) : {};
  return (
    <img
      {...rest}
      {...priorityAttr}
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