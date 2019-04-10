import React from 'react';

import cs from './Loader.module.css';

export default () => (
  <div className={cs.loaderContainer}>
    <div className={cs.loader} />
    Loading...
  </div>
);
