/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

// children is all children components of this layout
export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.protoTypes = {
  children: PropTypes.element.isRequired,
};
