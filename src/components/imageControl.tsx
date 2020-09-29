import Arrow from '../svgs/arrow.svg';
import React, { FC } from 'react';
import { css } from 'styled-components';
import { Image } from '../services/welcome.services';

const styles = {
    root: css`
        display: flex;
        flex-direction: row;
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};

        & > * {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid ${({ theme }) => theme.colors.purple.light};

            font-family: 'MonumentExtended', Arial, sans-serif;
            color: ${({ theme }) => theme.colors.purple.lightest};
        }
        button {
            height: 36px;
            width: 36px;
            background: transparent;
            cursor: pointer;
        }
    `,

    label: css`
        height: 36px;
        min-width: 36px;
        padding: 0 8px;

        user-select: none;
    `,
    rightButton: css`
        svg {
            transform: rotate(180deg);
        }
    `,
};

export interface ImageControlProps {
    current: number;
    images: Image[];
    handleChange: (num: number) => void;
}

const ImageControl: FC<ImageControlProps> = ({
    current,
    images,
    handleChange,
    ...props
}) => (
    <div css={styles.root} {...props}>
        <button
            onClick={() =>
                handleChange(current - 1 >= 0 ? current - 1 : current)
            }
        >
            <Arrow />
        </button>
        <span css={styles.label}>
            {current + 1} of {images.length}
        </span>
        <button
            css={styles.rightButton}
            onClick={() =>
                handleChange(
                    current + 1 < images.length ? current + 1 : current
                )
            }
        >
            <Arrow />
        </button>
    </div>
);
export default ImageControl;
