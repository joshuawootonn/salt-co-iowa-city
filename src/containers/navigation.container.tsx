import React from 'react';
import styled from 'styled-components';
import { Flex } from '../components/flex';
import { Link } from '../components/typography';
import { Col, Row } from '../components/layout';
import { ThemeProp } from '../theme';
import Box from 'components/box';
import Container from '../components/container';

// TODO: can this component be merged with the hero component that already exists?
const NavigationRow = styled(Row)`
  height: 60px;
  position: fixed;
  top: 0;
  margin-bottom: 0 !important;
`;

// const SubNavigation = styled(Flex)<ThemeProp>`
//   a {
//     border: 1px solid ${props => props.theme.color.light};
//     padding: 8px;
//     text-transform: uppercase;
//     transform: translateY(1px);
//     color: ${props => props.theme.color.light};
//     padding: ${props => props.theme.elementSizes.sm}px
//       ${props => props.theme.elementSizes.lg}px;
//   }
// `;

const NavigationContainer: React.FC = () => {
  return (
    <Container alignItems="center" justifyContent="space-between">
      <Box justifyContent="flex-start" alignItems="center">
        <h1>Salt</h1>
      </Box>
      <Box justifyContent="flex-end" alignItems="center">
        <Link to="/events" marginLeft="sm" marginBottom="na">
          Events
        </Link>
        <Link to="/media" marginLeft="sm" marginBottom="na">
          Media
        </Link>
        <Link to="/info" marginLeft="sm" marginBottom="na">
          Info
        </Link>
      </Box>
    </Container>
  );
};

export default NavigationContainer;
