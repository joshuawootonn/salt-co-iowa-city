import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import StaffCard from './staffCard';
import Hand from '../../svgs/hands.svg';
import { StaffBlock } from '../../models/staff';
import Title from '../../components/title';

const styles = {
    root: css`
        ${layout.container};
        max-width: 1420px;
    `,
    title: css`
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

const StaffContainer: FC<StaffBlock> = (props) => {
    return (
        <div css={styles.root} {...props}>
            <Title variant="small" css={styles.title}>
                {props.title}
            </Title>
            <div css={styles.staffContainer}>
                {props.staff.map((s, i) => (
                    <StaffCard key={i} {...s} />
                ))}
            </div>
            <Hand css={styles.imageBackground} />
        </div>
    );
};

export default StaffContainer;
