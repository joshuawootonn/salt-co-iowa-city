import React, { FC, useRef, useState } from 'react';
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
    const [isCurrLoaded, setIsCurrLoaded] = useState(false);
    const transitionLock = useRef(false);
    const [isCovered, setIsCovered] = useState(false);

    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0.4,
        ...props.intersectOption,
    });

    const maxDuration = 800;

    const transitionOut = () => {
        setIsCovered(false);
        setIsCurrLoaded(true);
        setTimeout(() => {
            transitionLock.current = false;
        }, maxDuration);
    };

    const switchImage = async () => {
        if (transitionLock.current) return;
        transitionLock.current = true;
        setIsCurrLoaded(false);
        setIsCovered(true);
        setTimeout(() => {
            curr === props.images.length - 1 ? setCurr(0) : setCurr(curr + 1);
        }, maxDuration);
    };

    const handleClick = (e: any) =>
        props.images.length > 1
            ? switchImage()
            : props.onClick && props.onClick();

    
    return (
        <Root {...props} type={getRootType(props)} onClick={handleClick}>
            <Content ref={ref}>
                <Cover
                    animate={toVariant(!isCovered && isVisible && isCurrLoaded)}
                    initial={toVariant(false)}
                    variants={{
                        exited: {
                            x: '0%',
                        },
                        entered: {
                            x: '100%',
                        },
                    }}
                    transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: maxDuration / 1000,
                    }}
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
