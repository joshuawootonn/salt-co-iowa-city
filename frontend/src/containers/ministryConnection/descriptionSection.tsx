import React, { FC, useEffect } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import typography from '../../components/typography';
import { MinistryConnection } from '../../models/ministryConnection';
import { Title } from '../../components/title';
import ImageController from '../../components/image';
import McDescriptionCard from './mcDescriptionCard';
import { motion, useAnimation } from 'framer-motion';
import useScreenType from '../../components/useScreenType';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import DescriptionBackground from './assets/descriptionBackground';
import useOrchestration from '../../components/useOrchestration';

const styles = {
    root: css`
        ${layout.container};
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    `,

    title: css`
        ${typography.title2};
        white-space: normal;
        margin: 0;
    `,

    titleContainer: css`
        align-self: flex-start;
        z-index: 10;
        transform: translateY(50%);
    `,
};

const DescriptionSection: FC<MinistryConnection> = (props) => {
    const screenType = useScreenType();
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0.3,
    });
    const isOrchestrated = useOrchestration(isVisible && isLoaded, 2000);

    const controls = useAnimation();

    useEffect(() => {
        if (isVisible && isLoaded) {
            controls.start('entered');
        }
    }, [screenType, isLoaded, isVisible]);

    return (
        <motion.div
            ref={ref}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.17,
                    },
                },
            }}
            animate={controls}
            css={styles.root}
        >
            <DescriptionBackground {...props} />
            <div css={styles.titleContainer}>
                <Title
                    isOrchestrated={isOrchestrated}
                    variant="small"
                    css={styles.title}
                >
                    {props.acronym || props.title}
                </Title>
            </div>
            <ImageController
                isOrchestrated={isOrchestrated}
                images={props.images}
            />
            <McDescriptionCard {...props} />
        </motion.div>
    );
};

export default DescriptionSection;
