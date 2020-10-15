import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import { addAlpha } from '../helpers/color';

const styles = {
    root: css`
        g {
            stroke: ${({ theme }) => addAlpha(theme.colors.purple.dark, 1)};
            stroke-width: 15px;
            stroke-linejoin: round;
            stroke-linecap: round;
        }
    `,
};

const Flag: FC = (props) => (
    <svg
        viewBox="0 0 997 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        css={styles.root}
        {...props}
    >
        <g opacity="0.1">
            <path d="M187.929 167.197V336.321C247.188 336.321 307.957 340.473 418.172 368.786" />
            <path d="M849.217 459.388V290.264C849.217 290.264 764.291 289.886 633.694 259.686" />
            <path d="M974.907 44.5059H914.893C838.271 44.5059 759.384 51.301 572.548 108.682C385.711 166.064 253.604 167.196 253.604 167.196H187.929V336.32H253.604C253.604 336.32 385.711 335.188 572.548 277.806C759.384 220.425 838.271 213.252 914.893 213.252H950.373L841.291 982.615M466.485 354.818C279.648 412.199 147.542 413.332 147.542 413.332H17.3223L96.9637 497.894L17.3223 582.456H147.542C147.542 582.456 279.648 581.323 466.485 523.942C653.322 466.561 732.208 459.388 809.207 459.388H849.217V290.264H809.207C732.208 290.264 653.322 297.437 466.485 354.818Z" />
            <path d="M950.373 213.252L978.682 17.3247" />
        </g>
    </svg>
);

export default Flag;
