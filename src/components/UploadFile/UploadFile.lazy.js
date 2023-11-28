import React, { lazy, Suspense } from 'react';

const LazyUploadFile = lazy(() => import('./UploadFile'));

const UploadFile = props => (
  <Suspense fallback={null}>
    <LazyUploadFile {...props} />
  </Suspense>
);

export default UploadFile;
