import styled from 'styled-components';
import {
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

const Box = styled.div<BorderProps & FlexboxProps & LayoutProps & SpaceProps>`
  ${border};
  ${flexbox};
  ${layout};
  ${space};
  display: flex;
  flex-direction: row;
`;

export default Box;
