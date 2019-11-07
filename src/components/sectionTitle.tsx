import { H1, TypographyProps } from './typography';
import styled from 'styled-components';

const transformTypography = (props: TypographyProps) => {
  return `transform: translateX(${
    props.textAlign === 'right'
      ? `${props.theme.elementSizes.xl}px`
      : `-${props.theme.elementSizes.xl}px`
  });`;
};

export const SectionTitle = styled(H1)`
  ${(props: TypographyProps) => transformTypography(props)}
`;
