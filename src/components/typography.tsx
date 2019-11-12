import styled from 'styled-components';
import { Theme, ElementSizesUnion, ThemeProp } from 'theme';
import { Link as GatsbyLink } from 'gatsby';

import {
  color,
  space,
  typography,
  ColorProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import css from '@styled-system/css';

export const Link = styled(GatsbyLink)<
  ColorProps & SpaceProps & TypographyProps & ThemeProp
>`
  ${color}
  ${space}
  ${typography}  
  color: ${props => props.theme.colors.light};
  text-decoration: none;  
  padding: 16px;
  border-style: solid;
  background-color: ${props => props.theme.colors.light}33;
  ${css({
    borderColor: 'light',
    borderWidth: [1, 2],
    px: [2],
    py: [2],
  })}
`;

export const H1 = styled.h1`
  ${color}
  ${space}
  ${typography}  
  color: ${props => props.theme.colors.light};
  margin: 0;
`;
