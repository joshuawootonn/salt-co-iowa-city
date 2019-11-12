import styled from 'styled-components';
import { Theme, ElementSizesUnion, ThemeProp } from 'theme';
import { Link as GatsbyLink } from 'gatsby';

import {
  color,
  space,
  typography,
  border,
  ColorProps,
  SpaceProps,
  TypographyProps as TProps,
  BorderProps,
} from 'styled-system';
import css from '@styled-system/css';

export type TypographyProps = BorderProps &
  ColorProps &
  SpaceProps &
  TProps &
  ThemeProp;

export const Link = styled(GatsbyLink)<TypographyProps>`
  ${color}
  ${border}
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

export const H1 = styled.h1<TypographyProps>`
  color: ${props => props.theme.colors.light};
  margin: 0;
  ${color}
  ${border}
  ${space}
  ${typography}  
`;

export const H2 = styled.h2<TypographyProps>`
  color: ${props => props.theme.colors.light};
  margin: 0;
  ${color}
  ${border}
  ${space}
  ${typography}  
`;

export const H3 = styled.h3<TypographyProps>`
  color: ${props => props.theme.colors.light};
  margin: 0;
  ${color}
  ${border}
  ${space}
  ${typography}  
`;

export const H4 = styled.h4<TypographyProps>`
  color: ${props => props.theme.colors.light};
  margin: 0;
  ${color}
  ${border}
  ${space}
  ${typography}  
`;

export const P = styled.p<TypographyProps>`
  color: ${props => props.theme.colors.light};
  margin: 0;
  ${color}
  ${border}
  ${space}
  ${typography}  
`;
