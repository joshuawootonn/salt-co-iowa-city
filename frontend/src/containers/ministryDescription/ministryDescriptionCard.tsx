import React, { FC, useState } from 'react';
import { css } from 'styled-components/macro';
import { MinistryDescription } from '../../models/ministryDescription';
import { Title } from '../../components/title';
import ImageController from '../../components/image/image.controller';
import { motion } from 'framer-motion';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import { toVariant } from '../../helpers/animation';
import TextCard from './TextCard';

const styles = {
    root: css`
        justify-self: center;
        position: relative;
    `,
    image: css`
        width: 1100px;
        height: 761px;
    `,
    title: css`
        position: absolute;
        height: 50px;
        top: -50px;
        left: 0;
        z-index: 10;
    `,
    imageControl: css`
        position: absolute;
        bottom: -50px;
        right: -130px;
        z-index: 10;
    `,
};

const MinistryDescriptionCard: FC<MinistryDescription> = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0,
    });

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
            animate={toVariant(isLoaded && isVisible)}
            css={styles.root}
        >
            <Title variant="small" css={styles.title}>
                {props.title}
            </Title>

            <ImageController css={styles.image} images={props.images} />
            {/*<ImageControl*/}
            {/*    current={currentImage}*/}
            {/*    images={props.images}*/}
            {/*    handleChange={setCurrentImage}*/}
            {/*    css={styles.imageControl}*/}
            {/*/>*/}
            <TextCard {...props} />
        </motion.div>
    );
};

export default MinistryDescriptionCard;
