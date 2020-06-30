import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

// children is all children components of this layout
export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.protoTypes = {
  children: PropTypes.element.isRequired,
};
