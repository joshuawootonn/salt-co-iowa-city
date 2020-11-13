import React, { FC, useState } from 'react';
import { FluidObject } from 'gatsby-image';
import { IntersectionObserver } from './IntersectionObserver';
import { motion } from 'framer-motion';
import { css } from 'styled-components/macro';
import { lighten } from 'polished';
import { toVariant } from '../helpers/animation';

const styles = {
    root: css`
        width: 100%;
        height: 100%;
        position: relative;

        overflow: hidden;
    `,
    cover: css`
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) =>
            lighten(0.02, theme.colors.background)};
    `,
    img: css`
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    `,
};

export interface ImageProps {
    fluid: FluidObject;
    onLoad?: () => void;
}

const Image: FC<ImageProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoad = () => {
        props.onLoad && props.onLoad();
        setIsLoaded(true);
    };

    return (
        <IntersectionObserver
            reset={false}
            css={styles.root}
            threshold={0.25}
            {...props}
            render={({ isVisible, viewState }) => {
                return (
                    <div css={styles.root}>
                        <motion.div
                            animate={toVariant(isLoaded && isVisible)}
                            initial={{ x: '0%' }}
                            variants={{
                                entered: { x: '100%' },
                                exited: { x: '0%' },
                            }}
                            transition={{
                                duration: 0.8,
                                bounce: 0,
                                stiffness: 200,
                                ease: [0.165, 0.84, 0.44, 1],
                            }}
                            css={styles.cover}
                        />
                        <picture>
                            {props.fluid.srcSetWebp && (
                                <source
                                    type="image/webp"
                                    media={props.fluid.media}
                                    srcSet={props.fluid.srcSetWebp}
                                    sizes={props.fluid.sizes}
                                />
                            )}
                            {props.fluid.srcSet && (
                                <source
                                    media={props.fluid.media}
                                    srcSet={props.fluid.srcSet}
                                    sizes={props.fluid.sizes}
                                />
                            )}
                            <img
                                css={styles.img}
                                srcSet={props.fluid.srcSet}
                                src={props.fluid.src}
                                onLoad={handleLoad}
                            />
                        </picture>
                        {props.children}
                    </div>
                );
            }}
        />
    );
};

export default Image;
