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

const Container = styled(Box)(
  css({
    maxWidth: ['calc(100% - 4px)', '1000px'],
    width: ['100%'],
    marginX: [1, 'auto'],
  })
);

export default Container;
