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
    staffContainer: css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        ${queryShit({
            mobile: css`
                grid-auto-flow: row;
                justify-content: center;
                grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
                grid-template-rows: repeat(2, minmax(120px, max-content));
            `,
            tablet: css`
                grid-auto-flow: row;
                justify-content: center;
                column-gap: 40px;

                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                grid-template-rows: repeat(2, minmax(120px, max-content));
            `,
            desktop: css`
                column-gap: 40px;
                grid-auto-flow: column;

                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, minmax(0px, max-content));
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
                        staggerChildren: 0.05,
                    },
                },
            }}
            ref={ref}
            css={styles.root}
            {...props}
        >
            <div css={styles.content}>
                <Title isOrchestrated={true} variant="small" css={styles.title}>
                    {props.title}
                </Title>
                <div css={styles.staffContainer}>
                    {props.staff.map((s, i) => (
                        <StaffCard key={i} {...s} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default StaffContainer;
