import { motion } from 'framer-motion';
import React, { FC } from 'react';
import styled from 'styled-components';
import Title from '../../../components/title/title';

const Svg = styled(motion.svg)`
    g:first-child {
        opacity: 0.3;
        stroke: ${({ theme }) => theme.colors.blue.medium};
        stroke-width: 5px;
        stroke-linejoin: round;
        stroke-linecap: round;
    }
    g:last-child {
        opacity: 0.3;
        fill: ${({ theme }) => theme.colors.blue.medium};
    }
`;

interface DoveProps {
    isOrchestrated?: boolean;
}

const Dove: FC<DoveProps> = (props) => (
    <Svg
        variants={{
            entered: { opacity: 1 },
            exited: { opacity: 0 },
        }}
        initial={'exited'}
        animate={!props.isOrchestrated && 'entered'}
        exit={'exited'}
        viewBox="0 0 584 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g opacity="0.1">
            <path d="M349.469 353.175C349.469 353.175 447.051 219.048 501.395 214.286C537.889 211.111 547.012 253.968 547.012 253.968L573.589 278.175L534.319 289.286C534.319 289.286 506.552 322.222 508.535 351.191C510.518 380.159 508.535 518.651 326.065 532.937C303.851 594.048 255.854 682.937 176.519 690.079C180.678 681.251 182.974 671.66 183.263 661.905C183.263 661.905 156.289 675.397 135.265 676.984C145.975 663.492 145.975 640.873 145.975 640.873C145.975 640.873 114.242 651.191 97.1846 646.429C106.329 638.369 113.057 627.929 116.622 616.27C107.973 616.015 99.5409 613.499 92.1645 608.974C84.7881 604.449 78.7238 598.072 74.5742 590.476C136.059 585.714 250.301 554.762 258.631 480.556" />
            <path d="M366.923 402.778C366.923 402.778 354.626 314.286 275.688 291.667C196.75 269.048 81.7149 316.667 9.91699 223.016C13.4871 261.508 -15.8668 480.159 310.595 482.936" />
            <path d="M408.177 282.143C408.177 282.143 418.491 217.857 376.047 171.032C333.603 124.206 278.862 120.635 278.862 9.92062C209.841 53.9683 197.941 210.714 243.955 286.111" />
        </g>
        <g opacity="0.1">
            <path d="M503.777 269.444C509.911 269.444 514.884 264.47 514.884 258.333C514.884 252.197 509.911 247.222 503.777 247.222C497.643 247.222 492.67 252.197 492.67 258.333C492.67 264.47 497.643 269.444 503.777 269.444Z" />
        </g>
    </Svg>
);

Dove.defaultProps = {
    isOrchestrated: false,
};

export default Dove;
