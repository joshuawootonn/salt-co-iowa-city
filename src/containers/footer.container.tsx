import React from 'react';

import HomeSplash from '../images/home-splash.jpg';
import Hero from '../components/hero';
import { H1, H2, H3, H4, P } from '../components/typography';
import Box from '../components/box';

const FooterContainer: React.FC = () => {
  return (
    <Hero
      background={`linear-gradient(rgba( 152, 114, 132, 0.35),rgba(77, 106, 109, 0.35)), url(${HomeSplash}) center`}
      backgroundSize="cover"
    >
      <Box flexDirection="column">
        <H2 mb={3} pl={2} pt={1} borderLeft={2} borderTop={2}>
          Together, our mission is to live as Salt and Light in the World
        </H2>
        <P textAlign="right">Mathew 5:13</P>
      </Box>
    </Hero>
  );
};

export default FooterContainer;
