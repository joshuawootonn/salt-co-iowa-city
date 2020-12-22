import React, { FC, useEffect, useRef, useState } from 'react';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import styled, { css } from 'styled-components/macro';
import { lighten } from 'polished';
import useIntersect from '../../helpers/useIntersect';
import { toVariant } from '../../helpers/animation';
import { motion } from 'framer-motion';
import Root from './root';

const Content = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

const Cover = styled(motion.div)`
    position: absolute;
    z-index: 1;
    top: -10%;
    left: 0;
    width: 110%;
    height: 120%;

    background-color: ${({ theme }) => lighten(0.02, theme.colors.background)};
`;

interface ImageProps {
    isHovered?: boolean;
    onLoad?: () => void;
    onClick?: () => void;
    href?: string;
    intersectOption?: any;
    images: {
        fluid: FluidObject;
    }[];
    isOrchestrated?: boolean;
    log?: boolean;
}

const getRootType = (props: ImageProps) => {
    if (props.images.length > 1 || props.onClick) {
        return 'button';
    }
    if (props.href) {
        return 'link';
    }
    return 'default';
};

const ImageController: FC<ImageProps> = (props) => {
    const [curr, setCurr] = useState(0);
    const transitionLock = useRef(false);
    const [isCovered, setIsCovered] = useState(false);

    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0.0,
        ...props.intersectOption,
    });

    const width = ref.current && ref.current.getBoundingClientRect().width;

    const maxDuration = width ? Math.floor(width * 0.667) : 800;

    const transitionOut = () => {
        setIsCovered(false);
        setTimeout(() => {
            transitionLock.current = false;
        }, maxDuration);
    };

    const switchImage = async () => {
        if (transitionLock.current) return;
        transitionLock.current = true;
        setIsCovered(true);
        setTimeout(() => {
            curr === props.images.length - 1 ? setCurr(0) : setCurr(curr + 1);
        }, maxDuration);
    };

    return (
        <Root
            {...props}
            type={getRootType(props)}
            onClick={props.images.length > 1 ? switchImage : props.onClick}
        >
            <Content ref={ref}>
                <Cover
                    animate={
                        props.isOrchestrated
                            ? undefined
                            : toVariant(!isCovered && isVisible)
                    }
                    initial={toVariant(false)}
                    variants={{
                        exited: {
                            x: '0%',
                            transition: {
                                duration: maxDuration / 1000,
                            },
                        },
                        entered: {
                            x: '100%',
                            transition: {
                                duration: maxDuration / 1000,
                            },
                        },
                    }}
                    transition={{ type: 'spring', bounce: 0 }}
                />
                <GatsbyImage
                    style={{ height: '100%' }}
                    imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
                    onLoad={() => transitionOut()}
                    {...props.images[curr]}
                />
            </Content>

            {props.children}
        </Root>
    );
};

export default ImageController;
