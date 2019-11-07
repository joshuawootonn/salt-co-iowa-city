import styled from 'styled-components';
import { ThemeProp } from '../theme';
import { Color } from './typography';

export interface ColorBlockProps {
  backgroundColor: Color;
}

export const ColorDiv = styled.div<ColorBlockProps>`
  background-color: ${(props: ThemeProp & ColorBlockProps) =>
    props.theme.color[props.backgroundColor]};
  position: absolute;
  width: 100%;
  height: 100%;
`;
