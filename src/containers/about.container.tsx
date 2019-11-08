import React from 'react';
import styled from 'styled-components';
import { Flex } from '../components/flex';
import { Col, Row } from '../components/layout';
import { H1, H3, H4 } from '../components/typography';

import AboutSplashImage from '../images/home-splash.jpg';

interface AboutRowProps {
  imgUrl: string;
}

const AboutRow = styled(Row)<AboutRowProps>`
  top: 0;
  height: 100vh;
  background:   linear-gradient(
      rgba( 152, 114, 132, 0.35), 
      rgba(77, 106, 109, 0.35)
    ), url("${props => props.imgUrl}") center;
    background-size: cover;
`;

const AboutH4 = styled(H4)`
  border-top: 2px solid ${props => props.theme.color.light};
  border-left: 2px solid ${props => props.theme.color.light};
  padding-left: 8px;
`;

const AboutContainer: React.FC = () => {
  return (
    <AboutRow imgUrl={AboutSplashImage} justify="center" align="center">
      <Col>
        <AboutH4>
          Together, our mission is to live as Salt and Light in the World
        </AboutH4>
      </Col>
    </AboutRow>
  );
};

export default AboutContainer;
