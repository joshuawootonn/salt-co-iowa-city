import React from 'react';

import HomeSplash from '../images/home-splash.jpg';
import Hero from '../components/hero';

const AboutContainer: React.FC = () => {
  return (
    <Hero
      background={`linear-gradient(rgba( 152, 114, 132, 0.35),rgba(77, 106, 109, 0.35)), url(${HomeSplash}) center`}
      backgroundSize="cover"
    >
      <h4>Together, our mission is to live as Salt and Light in the World</h4>
    </Hero>
  );
};

export default AboutContainer;
