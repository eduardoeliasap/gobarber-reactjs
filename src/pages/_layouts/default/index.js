import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

// children is all children components of this layout
export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.protoTypes = {
  children: PropTypes.element.isRequired,
};
