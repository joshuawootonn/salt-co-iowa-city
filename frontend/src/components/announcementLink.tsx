import React, { FC, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { Announcement } from '../models/announcement';
import { motion } from 'framer-motion';
import { FluidObject } from 'gatsby-image';
import { lighten } from 'polished';
import Image from './image/image';
import { animateOut } from './image/animations';
import useIntersect from '../helpers/useIntersect';

interface AnnouncementLinkProps {
    linkAnnouncement: Announcement;
}

const ImageRoot = styled.div<{ isHovered: boolean }>`
    width: 100%;
    height: 100%;
    position: relative;

    overflow: hidden;
    background-color: transparent;

    border: 2px solid transparent;
    border-radius: 0;

    outline: none;

    transition: ease 150ms;

    ${({ theme, isHovered }) => {
        const hoverCss = css`
            transform: scale(1.03);
            border: 2px solid ${lighten(0.3, theme.colors.background)};
        `;
        return css`
            cursor: pointer;
            ${isHovered && hoverCss}
            &:hover {
                ${hoverCss}
            }
            &:focus {
                ${hoverCss}
            }
            &:active {
                transform: scale(1);
                border: 2px solid ${lighten(0.4, theme.colors.background)};
            }
        `;
    }}
`;

const ImageCover = styled.div`
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
    isHovered: boolean;
    onLoad?: () => void;
    image: {
        fluid: FluidObject;
    };
}

const AnnouncementLinkImage: FC<ImageProps> = (props) => {
    const [isCurrLoaded, setIsCurrLoaded] = useState(false);
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, { threshold: 0.25 });

    useEffect(() => {
        isCurrLoaded &&
            isVisible &&
            animateOut(animationTarget).finally(() => {
                transitionLock.current = false;
            });
    }, [isCurrLoaded, isVisible]);

    const animationId = `image-${props.image.fluid.src}`;
    const animationTarget = `[data-animation="${animationId}"]`;

    const handleLoad = async () => setIsCurrLoaded(true);

    const transitionLock = useRef(false);

    return (
        <ImageRoot ref={ref} {...props}>
            <ImageCover data-animation={animationId} />
            <Image onLoad={handleLoad} {...props.image} />
            {props.children}
        </ImageRoot>
    );
};

const styles = {
    root: css`
        height: 225px;
        width: 100%;

        position: relative;
    `,
    image: css`
        height: 100%;
        width: 100%;
    `,
    textRoot: (isHovered: boolean) => css`
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};
        padding: 20px;

        border: 2px solid ${({ theme }) => theme.colors.blue.light};

        position: absolute;
        z-index: 10;
        bottom: 0;
        left: 0;

        transform: translate3d(-20px, 20px, 0);

        transition: all 200ms ease-in-out;

        ${isHovered &&
        css`
            transform: translate3d(-15px, 15px, 0);
        `}
    `,
    text: css`
        color: ${({ theme }) => theme.colors.blue.light};
        font-size: 18px;
        margin: 0;
    `,
};

const AnnouncementLink: FC<AnnouncementLinkProps> = ({ linkAnnouncement }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={linkAnnouncement.link}
            css={styles.root}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnnouncementLinkImage
                isHovered={isHovered}
                image={linkAnnouncement.image}
                css={styles.root}
            />
            <div css={styles.textRoot(isHovered)}>
                <h1 css={styles.text}>{linkAnnouncement.text}</h1>
            </div>
        </motion.a>
    );
};

export default AnnouncementLink;
