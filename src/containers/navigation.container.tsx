import React from 'react';
import styled from 'styled-components';
import { Flex } from '../components/flex';
import { H1, Link } from '../components/typography';
import { Col, Row } from '../components/layout';
import { ThemeProp } from '../theme';
import Box from 'components/box';
import Container from '../components/container';

const Navigation = styled(Container)`
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  margin-bottom: 0 !important;
`;

const NavigationLink = styled(Link)`
  transform: translateY(2px); // TODO: fix this to be dynamic with the size of screen
`;

const NavigationContainer: React.FC = () => {
  return (
    <Navigation alignItems="center" justifyContent="space-between">
      <Box
        width="100%"
        borderBottom="2px white solid"
        borderBottomColor="light"
        justifyContent="flex-start"
        alignItems="center"
      >
        <H1>Salt</H1>
      </Box>
      <Box
        width="100%"
        borderBottom="2px white solid"
        borderBottomColor="light"
        justifyContent="flex-end"
        alignItems="center"
      >
        <NavigationLink to="/events" ml={3}>
          Events
        </NavigationLink>
        <NavigationLink to="/media" ml={3}>
          Media
        </NavigationLink>
        <NavigationLink to="/info" ml={3}>
          Info
        </NavigationLink>
      </Box>
    </Navigation>
  );
};

export default NavigationContainer;
