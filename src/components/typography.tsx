import styled, { css } from 'styled-components';
import { Theme, ElementSizesUnion } from 'theme';

export type Color =
  | 'yellow'
  | 'green'
  | 'orange'
  | 'pink'
  | 'blue'
  | 'purple'
  | 'light'
  | 'medium'
  | 'dark';
export type Alignment = 'right' | 'left';

export interface TypographyProps {
  theme: Theme;
  color?: Color;
  textAlign?: Alignment;
  horizontalTransform?: ElementSizesUnion;
  marginRight?: ElementSizesUnion;
  marginLeft?: ElementSizesUnion;
  marginBottom?: ElementSizesUnion;
}

const getHorizontalTransform = (
  props: TypographyProps,
  defaultProportion: ElementSizesUnion = 'na'
): string =>
  `${props.textAlign === 'right' ? '' : '-'}${
    props.horizontalTransform
      ? props.theme.elementSizes[props.horizontalTransform]
      : props.theme.elementSizes[defaultProportion]
  }px`;

const getColor = (
  props: TypographyProps,
  defaultColor: Color = 'dark'
): string => {
  return props.color
    ? props.theme.color[props.color]
    : props.theme.color[defaultColor];
};

const TypographyBase = css`
  font-family: 'Josefin Sans', sans-serif;
  text-align: ${(props: TypographyProps) =>
    props.textAlign === 'right' ? 'right' : 'left'};
  color: ${(props: TypographyProps) => getColor(props)};
  z-index: 5;
  margin-right: ${({ marginRight, theme: { elementSizes } }: TypographyProps) =>
    marginRight ? elementSizes[marginRight] : elementSizes.na}px;
  margin-bottom: ${({
    marginBottom,
    theme: { elementSizes },
  }: TypographyProps) =>
    marginBottom ? elementSizes[marginBottom] : 'inherit'}px;
  margin-left: ${({ marginLeft, theme: { elementSizes } }: TypographyProps) =>
    marginLeft ? elementSizes[marginLeft] : elementSizes.na}px;
  margin-top: 0;
`;

export const H1 = styled.h1<TypographyProps>`
  ${TypographyBase};
  @media (max-width: 575px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) =>
      props.theme.elementSizes.xl * 1.5}px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl * 3}px;
  }
  @media (min-width: 1101px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl * 3}px;
  }
  @media (min-width: 1921px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl * 4}px;
  }
  @media (min-width: 2561px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl * 7}px;
  }
`;

export const H2 = styled.h2<TypographyProps>`
  ${TypographyBase};
  @media (max-width: 575px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 1101px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 1921px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 2561px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
`;

export const H3 = styled.h3<TypographyProps>`
  ${TypographyBase};
  @media (max-width: 575px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) =>
      props.theme.elementSizes.xl * 1.5}px;
  }
  @media (min-width: 1101px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) =>
      props.theme.elementSizes.xl * 1.5}px;
  }
  @media (min-width: 1921px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) =>
      props.theme.elementSizes.xl * 2.5}px;
  }
  @media (min-width: 2561px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl * 4}px;
  }
`;

export const H4 = styled.h4<TypographyProps>`
  ${TypographyBase};
  @media (max-width: 575px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.lg}px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 1101px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 1921px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) =>
      props.theme.elementSizes.xl * 1.5}px;
  }
  @media (min-width: 2561px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) =>
      props.theme.elementSizes.xl * 2.5}px;
  }
`;

export const P = styled.p<TypographyProps>`
  ${TypographyBase};
  line-height: 1.2;
  @media (max-width: 575px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.md}px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.md}px;
  }
  @media (min-width: 1101px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.md}px;
  }
  @media (min-width: 1921px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 2561px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.lg * 2}px;
  }
`;
export const MarkdownP = styled(P)`
  margin-bottom: 16px;
  text-align: right;
`;

export const A = styled.a<TypographyProps>`
  ${TypographyBase};
  @media (max-width: 575px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) =>
      props.theme.elementSizes.sm * 1.5}px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) =>
      props.theme.elementSizes.sm * 1.2}px;
  }
  @media (min-width: 1101px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.md}px;
  }
  @media (min-width: 1921px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.lg}px;
  }
  @media (min-width: 2561px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  color: ${(props: TypographyProps) => getColor(props, 'dark')};
  font-weight: bold;
  margin-bottom: 16px;
  display: inline-block;
  text-decoration: none;
  padding: 4px;
`;

export const Li = styled.li<TypographyProps>`
  ${TypographyBase};
  @media (max-width: 575px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 1101px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 1921px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media (min-width: 2561px) {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  list-style-type: none;
  margin-bottom: 16px;
`;
