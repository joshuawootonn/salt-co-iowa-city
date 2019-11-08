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

const Navigation = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.color.light};
`;

const SubNavigation = styled(Flex)<ThemeProp>`
  a {
    border: 1px solid ${props => props.theme.color.light};
    padding: 8px;
    text-transform: uppercase;
    transform: translateY(1px);
    color: ${props => props.theme.color.light};
    padding: ${props => props.theme.elementSizes.sm}px
      ${props => props.theme.elementSizes.lg}px;
  }
`;

const NavigationContainer: React.FC = () => {
  return (
    <NavigationRow justify="center" align="center">
      <Col>
        <Navigation direction="row" justify="space-between" align="center">
          <SubNavigation direction="row" justify="flex-end" align="center">
            <A>Salt</A>
          </SubNavigation>
          <SubNavigation direction="row" justify="flex-end" align="center">
            <A marginLeft="sm" marginBottom="na">
              Events
            </A>
            <A marginLeft="sm" marginBottom="na">
              Media
            </A>
            <A marginLeft="sm" marginBottom="na">
              Info
            </A>
          </SubNavigation>
        </Navigation>
      </Col>
    </NavigationRow>
  );
};

export default NavigationContainer;
