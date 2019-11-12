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

export type ContainerProps = BorderProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps;

const Container = styled(Box)<ContainerProps>`
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  ${css({
    paddingX: [2, 3, 3, 0],
  })}
`;

export default Container;
