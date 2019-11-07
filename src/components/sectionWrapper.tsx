import { Theme, ThemeProp } from '../theme';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';

interface AboutWrapperProps {
  theme: Theme;
}

export const SectionWrapper = styled(Container)`
  position: relative;
  @media (max-width: 1100px) {
    margin-bottom: ${(props: ThemeProp) => props.theme.elementSizes.xl * 5}px;
  }
  @media (min-width: 1101px) {
    margin-bottom: ${(props: ThemeProp) => props.theme.elementSizes.xl * 5}px;
  }
  @media (min-width: 1921px) {
    margin-bottom: ${(props: ThemeProp) => props.theme.elementSizes.xl * 10}px;
  }
  @media (min-width: 2561px) {
    margin-bottom: ${(props: ThemeProp) => props.theme.elementSizes.xl * 15}px;
  }
`;
