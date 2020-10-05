import React, { FC } from 'react';
import { StaffBlock } from '../../services/staff.services';

import { css } from 'styled-components';
import layout from '../../components/layout';
import typography from '../../components/typography';
import StaffCard from './staffCard';
import Hand from '../../svgs/hands.svg';

const styles = {
    root: css`
        ${layout.container};
        max-width: 1420px;
    `,
    title: css`
        ${typography.title2};
        margin-bottom: 40px;
    `,
    staffContainer: css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    `,
    imageBackground: css`
        position: absolute;
        height: 140%;
        width: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -2;
    `,
};

const StaffContainer: FC<StaffBlock> = (props) => (
    <div css={styles.root}>
        <h2 css={styles.title}>{props.title}</h2>
        <div css={styles.staffContainer}>
            {props.staff.map((s, i) => (
                <StaffCard key={i} {...s} />
            ))}
        </div>
        <Hand css={styles.imageBackground} />
    </div>
);

export default StaffContainer;
