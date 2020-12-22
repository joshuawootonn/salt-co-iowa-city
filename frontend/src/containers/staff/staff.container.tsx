import React, { FC, useEffect, useState } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import StaffCard from './staffCard';
import Hand from './hands.svg';
import { StaffBlock } from '../../models/staff';
import { Title } from '../../components/title';
import useIntersect from '../../helpers/useIntersect';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';
import { motion } from 'framer-motion';
import useScreenType, { queryShit } from '../../components/useScreenType';
import Staff from './staff';

const styles = {
    root: css`
        position: relative;
    `,
    content: css`
        max-width: 1420px;
        ${layout.container};

        display: flex;
        flex-direction: column;
    `,
    title: css`
        align-self: flex-start;
        ${queryShit({
            mobile: css`
                margin-bottom: 15px;
            `,
            tablet: css`
                margin-bottom: 20px;
            `,
            desktop: css`
                margin-bottom: 20px;
            `,
        })}
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
    const screenType = useScreenType();
    const { isVisible } = useIntersect(ref, {
        threshold: 0,
    });

    const [boundingBox, setBoundingBox] = useState(null);

    useEffect(() => {
        if (ref.current) {
            // @ts-ignore
            setBoundingBox(ref.current.getBoundingClientRect());
        }
    }, [screenType]);

    return (
        <motion.div
            animate={toVariant(isLoaded && isVisible)}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.4,
                        staggerChildren: 0.08,
                    },
                },
            }}
            ref={ref}
            css={styles.root}
            {...props}
        >
            <div css={styles.content}>
                <Title variant="small" css={styles.title}>
                    {props.title}
                </Title>
                <Staff {...props} />
            </div>
        </motion.div>
    );
};

export default StaffContainer;
