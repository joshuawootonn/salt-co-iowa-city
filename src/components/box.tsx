import styled from 'styled-components';
import {
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from 'styled-system';

export type BoxProps = BorderProps & FlexboxProps & LayoutProps & SpaceProps;

const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: row;
  ${border};
  ${flexbox};
  ${layout};
  ${space};
`;

export default Box;
