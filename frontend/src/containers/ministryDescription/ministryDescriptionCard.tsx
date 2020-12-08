import React, { FC, useEffect } from 'react';
import { css } from 'styled-components/macro';
import { MinistryDescription } from '../../models/ministryDescription';
import { Title } from '../../components/title';
import ImageController from '../../components/image/image.controller';
import { motion, useAnimation } from 'framer-motion';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import MinistryDescriptionTextCard from './ministryDescriptionTextCard';
import useScreenType from '../../components/useScreenType';

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
    const screenType = useScreenType();
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0,
    });

    const controls = useAnimation();

    useEffect(() => {
        if (isVisible && isLoaded) {
            controls.start('entered');
        }
    }, [screenType, isVisible, isLoaded]);

    return (
        <motion.div
            ref={ref}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0,
                        staggerChildren: 0.17,
                    },
                },
            }}
            animate={controls}
            css={styles.root}
        >
            <div css={styles.titleContainer}>
                <Title isOrchestrated={true} variant="small" css={styles.title}>
                    {props.title}
                </Title>
            </div>
            <ImageController css={styles.image} images={props.images} />
            <MinistryDescriptionTextCard {...props} index={props.index} />
        </motion.div>
    );
};

export default MinistryDescriptionCard;
