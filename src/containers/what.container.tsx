import React from 'react';

import dummyImage from '../images/what-splash.jpg';
import Hero from '../components/hero';
import { H1, H2, H3, H4, P } from '../components/typography';
import Box from '../components/box';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  padding: 16px;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

const WhatContainer: React.FC = () => {
  return (
    <Grid>
      <Image src={dummyImage} />
      <H2 color={'dark'} mb={3} pl={2} pt={1} borderLeft={2} borderTop={2}>
        Together, our mission is to live as Salt and Light in the World
      </H2>
      <P color={'dark'} textAlign="right">Mathew 5:13</P>
    </Grid>
  );
};

export default WhatContainer;
