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
  background,
  BackgroundProps,
  color,
  ColorProps,
} from 'styled-system';
import css from '@styled-system/css';
import Box, { BoxProps } from './box';
import React from 'react';
import Container from './container';

export type HeroProps = BoxProps & BackgroundProps & ColorProps;

const Hero = styled(Box)<HeroProps>`
  ${background};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export default Hero;
