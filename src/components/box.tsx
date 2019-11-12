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
  ${border};
  ${flexbox};
  ${layout};
  ${space};
  display: flex;
  flex-direction: row;
`;

export default Box;
