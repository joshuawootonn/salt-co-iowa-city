import styled from 'styled-components';
import { Flex } from './flex';
import { Col as BootstrapCol } from 'styled-bootstrap-grid';

export const Row = styled(Flex)`
  @media (max-width: 575px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 50px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    margin-left: 5%;
    width: 90%;
    flex-direction: column;
    margin-bottom: 205px;
  }
  @media (min-width: 1101px) {
    flex-direction: row;
    width: 100%;
    margin-bottom: 205px;
  }
`;

export const Col = styled(BootstrapCol)`
  @media (max-width: 575px) {
    width: 90%;
    margin: 0 20px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    width: 100%;
    margin: 0 20px;
  }
  @media (min-width: 1101px) {
    width: 40%;
  }
  position: relative;
`;
