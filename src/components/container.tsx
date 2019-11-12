import styled from 'styled-components';
import {
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';
import css from '@styled-system/css';
import Box from './box';
import React from 'react';

export type ContainerProps = BorderProps & FlexboxProps & LayoutProps & SpaceProps;

const Container = styled(Box)<ContainerProps>`
  left: 50%;
  transform: translateX(-50%);
  ${css({
    width: ['calc(100% - 4px)%', '1000px'],
    marginX: [1, 'auto'],
  })}
`;

export default Container;
