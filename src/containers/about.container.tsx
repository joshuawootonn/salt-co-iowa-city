import React from 'react';
import styled from 'styled-components';
import { Flex } from '../components/flex';
import { H1 } from '../components/typography';

import HomeSplash from '../images/home-splash.jpg';

interface Splash {
  imgUrl: string;
}
// TODO: can this component be merged with the hero component that already exists?
const Hero = styled(Flex)<Splash>`  
  height: 100vh;
  width: 100vw;
  background:  linear-gradient(
      rgba(127, 44, 203, 0.45), 
      rgba(255, 169, 231, 0.45)
    ), url("${props => props.imgUrl}") center;
    
`;

const AboutContainer: React.FC = () => {
  return (
    <Hero imgUrl={HomeSplash} justify="center" align="center">
      <div>
        <H1>Salt</H1>
      </div>
    </Hero>
  );
};

export default AboutContainer;
