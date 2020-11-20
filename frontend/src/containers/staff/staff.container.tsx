import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import StaffCard from './staffCard';
import Hand from '../../svgs/hands.svg';
import { StaffBlock } from '../../models/staff';
import { Title } from '../../components/title';
import useIntersect from '../../helpers/useIntersect';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';
import { motion } from 'framer-motion';

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
    background: css`
        position: absolute;
        width: 100vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -2;
    `,
};

const StaffContainer: FC<StaffBlock> = (props) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0,
    });
    return (
        <motion.div
            animate={toVariant(isLoaded && isVisible)}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.05,
                    },
                },
            }}
            ref={ref}
            css={styles.root}
            {...props}
        >
            <Title variant="small" css={styles.title}>
                {props.title}
            </Title>
            <div css={styles.staffContainer}>
                {props.staff.map((s, i) => (
                    <StaffCard key={i} {...s} />
                ))}
            </div>
            <div css={styles.background}>
                <Hand />
            </div>
        </motion.div>
    );
};

export default StaffContainer;
