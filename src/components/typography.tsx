import styled, { css } from 'styled-components';
import { Theme, ElementSizesUnion } from 'theme';
import { Link as GatsbyLink } from 'gatsby';

import {
  color,
  space,
  typography,
  ColorProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export const Link = styled(GatsbyLink)<
  ColorProps & SpaceProps & TypographyProps
>`
  ${color}
  ${space}
  ${typography}
  text-decoration: none;
  
  padding: 4px;
`;
