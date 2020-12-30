import React from 'react';
import styled from 'styled-components/macro';
import { addAlpha } from '../helpers/color';

const Svg = styled.svg`
    fill: ${({ theme }) => addAlpha(theme.colors.background, 0.5)};
`;

const BlockArrow = () => (
    <Svg viewBox="0 0 74 55" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.979004 34.3492L0.979004 21.3492L44.979 21.3492L34.479 11.3492L44.479 1.84924L71.979 27.8492L44.479 53.8492L34.979 44.8492L45.479 34.3492H0.979004Z"
            stroke="#AFBCE9"
            strokeWidth="1.5"
        />
    </Svg>
);

export default BlockArrow;
