import React, { FC, useEffect, useState } from 'react';
import { FluidObject } from 'gatsby-image';
import { AnimatePresence, motion } from 'framer-motion';
import styled, { css } from 'styled-components/macro';
import { lighten } from 'polished';
import { toVariant } from '../helpers/animation';
import useIntersect from '../helpers/useIntersect';

const Root = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    overflow: hidden;
    background-color: ${({ theme }) => lighten(0.02, theme.colors.background)};
`;

const Cover = styled(motion.div)`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => lighten(0.02, theme.colors.background)};
`;

const styles = {
    cover: css``,
    img: css`
        position: absolute;
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
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0,
    });

    useEffect(() => {
        setIsLoaded(false);
    }, [props.fluid]);

    const handleLoad = () => {
        props.onLoad && props.onLoad();
        setIsLoaded(true);
    };

    const variants1 = {
        enter: {
            x: '0',
        },
        center: {
            x: '0',
        },
    };

    const variants2 = {
        enter: {
            x: '0%',
        },
        center: {
            x: '100%',
        },
    };

    return (
        <Root ref={ref} {...props}>
            {/*<Cover*/}
            {/*    variants={variants1}*/}
            {/*    animate={isLoaded && isVisible ? 'center' : 'enter'}*/}
            {/*    transition={{ type: 'spring', duration: 0.8, bounce: 0 }}*/}
            {/*/>*/}
            <Cover
                variants={variants2}
                animate={isLoaded && isVisible ? 'center' : 'enter'}
                transition={{ type: 'spring', duration: 0.8, bounce: 0 }}
            />

            <motion.picture key={props.fluid.src + '-picture'}>
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
            </motion.picture>
            {props.children}
        </Root>
    );
};

export default Image;
