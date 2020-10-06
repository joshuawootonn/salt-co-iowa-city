import React, { FC } from 'react';
import { css } from 'styled-components';

const styles = {
    root: css`
        path:first-child {
            stroke: ${({ theme }) => theme.colors.blue.medium};
        }
        path:last-child {
            fill: ${({ theme }) => theme.colors.blue.medium};
        }
    `,
};

const Male: FC = (props) => {
    return (
        <svg
            viewBox="0 0 54 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            css={styles.root}
            {...props}
        >
            <path
                d="M26.9775 2C20.3567 2.01183 14.0105 4.63276 9.32888 9.28871C4.64727 13.9447 2.0119 20.2561 2 26.8406V75H26.9775V60.4537H41.784L44.7093 45.9074H52V26.8406C51.9881 20.2483 49.3465 13.9302 44.6552 9.27292C39.9638 4.61569 33.6061 1.99999 26.9775 2Z"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M37.6436 34.8075C38.5384 34.8075 39.2638 34.0861 39.2638 33.1962C39.2638 32.3064 38.5384 31.585 37.6436 31.585C36.7488 31.585 36.0234 32.3064 36.0234 33.1962C36.0234 34.0861 36.7488 34.8075 37.6436 34.8075Z" />
        </svg>
    );
};

export default Male;
