import React from 'react';
import classnames from 'classnames';

import cs from './Page.module.css';

export default props => (
  <div className={classnames(cs.page, props.className)}>{props.children}</div>
);
