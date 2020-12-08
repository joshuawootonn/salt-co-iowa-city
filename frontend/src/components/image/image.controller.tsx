import React, { FC, useEffect, useRef, useState } from 'react';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import styled, { css } from 'styled-components/macro';
import { lighten } from 'polished';
import useIntersect from '../../helpers/useIntersect';
import Image from './image';
import { animateIn, animateOut } from './animations';

const Root = styled.button<{ isButton: boolean; isHovered?: boolean }>`
    width: 100%;
    height: 100%;
    position: relative;

    overflow: hidden;
    background-color: transparent;

    border: 2px solid transparent;
    border-radius: 0;

    perspective: 1000px;
    padding: 0;

    outline: none;

    transition: ease 150ms;

    ${({ isButton, isHovered, theme }) => {
        if (!isButton) return;
        const hoverCss = css`
            transform: scale(1.03);
            border: 2px solid ${lighten(0.3, theme.colors.background)};
        `;
        console.log(isHovered && hoverCss);
        return css`
            cursor: pointer;
            ${isHovered && hoverCss}

            &:focus-visible {
                ${hoverCss}
            }
            &:hover {
                ${hoverCss}
            }
            &:active,
            &:active:focus-visible {
                transform: scale(1);
                border: 2px solid ${lighten(0.4, theme.colors.background)};
            }
        `;
    }}
`;

const Cover = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 110%;
    height: 110%;

    transform: translateY(-5%);

    background-color: ${({ theme }) => lighten(0.02, theme.colors.background)};
`;

interface ImageProps {
    isHovered?: boolean;
    onLoad?: () => void;
    onClick?: () => void;
    intersectOption?: any;
    images: {
        fluid: FluidObject;
    }[];
}

const ImageController: FC<ImageProps> = (props) => {
    const [curr, setCurr] = useState(0);
    const [isCurrLoaded, setIsCurrLoaded] = useState(false);
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0.25,
        ...props.intersectOption,
    });

    useEffect(() => {
        isCurrLoaded &&
            isVisible &&
            animateOut(animationTarget).finally(() => {
                transitionLock.current = false;
            });
    }, [isCurrLoaded, isVisible]);

    const animationId = `image-${props.images[curr].fluid.src}`;
    const animationTarget = `[data-animation="${animationId}"]`;

    const handleLoad = async () => setIsCurrLoaded(true);

    const transitionLock = useRef(false);

    const isButton = !!(props.onClick || props.images.length > 1);

    const switchImage = async () => {
        props.onClick && props.onClick();
        if (transitionLock.current) return;
        transitionLock.current = true;

        await animateIn(animationTarget);
        setIsCurrLoaded(false);
        curr === props.images.length - 1 ? setCurr(0) : setCurr(curr + 1);
    };

    return (
        <Root
            ref={ref}
            {...props}
            isButton={isButton}
            onClick={isButton ? switchImage : undefined}
        >
            <Cover data-animation={animationId} />
            <GatsbyImage onLoad={handleLoad} {...props.images[curr]} />
        </Root>
    );
};

export default ImageController;
