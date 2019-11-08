import React from 'react';
import styled from 'styled-components';
import { Flex } from '../components/flex';
import { H1, A } from '../components/typography';
import { Col, Row } from '../components/layout';
import { ThemeProp } from '../theme';

// TODO: can this component be merged with the hero component that already exists?
const NavigationRow = styled(Row)`
  height: 60px;
  position: fixed;
  top: 0;
  margin-bottom: 0 !important;
`;

const RightNavigation = styled(Flex)<ThemeProp>`
  border-bottom: 1px solid white;

  a {
    border: 1px solid white;
    padding: 8px;
    text-transform: uppercase;
    transform: translateY(1px);
    color: white;
    padding: ${props => props.theme.elementSizes.xs * 1.5}px ${props => props.theme.elementSizes.sm}px;
  }
`;

const NavigationContainer: React.FC = () => {
  return (
    <NavigationRow justify="center" align="center">
      <Col>
        <Flex direction="row" justify="space-between" align="center">
          <Flex direction="row" justify="flex-end" align="center">
            <A>Salt</A>
          </Flex>
          <RightNavigation direction="row" justify="flex-end" align="center">
            <A marginLeft="sm" marginBottom="na">
              Events
            </A>
            <A marginLeft="sm" marginBottom="na">
              Media
            </A>
            <A marginLeft="sm" marginBottom="na">
              Info
            </A>
          </RightNavigation>
        </Flex>
      </Col>
    </NavigationRow>
  );
};

export default NavigationContainer;
