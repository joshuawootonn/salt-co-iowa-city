import React, { FC, useEffect, useState } from 'react';
import { css } from 'styled-components/macro';
import { MinistryDescription } from '../../models/ministryDescription';
import { Title } from '../../components/title';
import ImageController from '../../components/image/image.controller';
import { motion, useAnimation } from 'framer-motion';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import MinistryDescriptionTextCard from './ministryDescriptionTextCard';
import useScreenType from '../../components/useScreenType';
import useOrchestration from '../../components/useOrchestration';
import { toVariant } from '../../helpers/animation';

const styles = {
    root: css`
        justify-self: center;
        position: relative;
        display: flex;
        flex-direction: column;
    `,
    image: css`
        width: 100%;
        max-height: 80vh;
    `,
    titleContainer: css`
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        transform: translateY(-60%);
    `,
    title: css`
        white-space: normal;
    `,
    imageControl: css`
        position: absolute;
        bottom: -50px;
        right: -130px;
        z-index: 5;
    `,
};

export interface MinistryDescriptionCardProps extends MinistryDescription {
    index: number;
}

const MinistryDescriptionCard: FC<MinistryDescriptionCardProps> = (props) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0.5,
    });
    const screenType = useScreenType();
    const controls = useAnimation();
    const animate = isLoaded && isVisible;
    const isOrchestrated = useOrchestration(animate, 2000);

    useEffect(() => {
        if (animate) {
            controls.start('entered');
        }
    }, [screenType, animate]);

    return (
        <motion.div
            ref={ref}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.14,
                    },
                },
            }}
            animate={controls}
            css={styles.root}
        >
            <div css={styles.titleContainer}>
                <Title
                    isOrchestrated={isOrchestrated}
                    variant="small"
                    css={styles.title}
                >
                    {props.title}
                </Title>
            </div>
            <ImageController
                isOrchestrated={isOrchestrated}
                css={styles.image}
                images={props.images}
            />
            <MinistryDescriptionTextCard {...props} index={props.index} />
        </motion.div>
    );
};

export default MinistryDescriptionCard;
