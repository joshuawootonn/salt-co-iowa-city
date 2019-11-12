import React from 'react';
import styled from 'styled-components';
import { Flex } from '../components/flex';
import { Col, Row } from '../components/layout';
import { H1, H3, H4 } from '../components/typography';
import { color, ColorProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';

const Box = styled.div<ColorProps & LayoutProps & SpaceProps>`
  ${color};
  ${layout};
  ${space};
  height: 100px;
  width: 100px;
`;

const TestContainer: React.FC = () => {
  return <Box color="purple" bg="medium">
    asdf
  </Box>;
};

export default TestContainer;
