import styled from 'styled-components';

export interface FlexProps {
  direction?: 'column' | 'row';
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'inherit';
  align?: 'start' | 'end' | 'center' | 'flex-start' | 'flex-end' | 'inherit';
  wrap?: 'wrap' | 'nowrap';
  isFullWidth?: boolean;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  width: ${props => (props.isFullWidth ? '100%' : 'auto')};
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  flex-wrap: ${props => props.wrap};
`;
