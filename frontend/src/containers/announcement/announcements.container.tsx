import { AnnouncementBlock } from '../../models/announcement';
import React, { FC } from 'react';
import layout from '../../components/layout';
import { css } from 'styled-components/macro';
import Bullhorn from '../../svgs/bullhorn.svg';
import Announcements from './announcement';
import MarqueTitle from '../../components/title/marqueTitle';

const styles = {
    root: css`
        ${layout.container};
        max-width: 100vw;
        margin-bottom: 500px;
    `,
    background: css`
        position: absolute;
        z-index: -1;
        top: 0%;
        left: -5vw;
        transform: translate3d(0, -20%, 0);
        width: 110vw;
        height: auto;
        overflow: hidden;
    `,
    title: css`
        margin-bottom: 60px;
    `,
};

const AnnouncementContainer: FC<AnnouncementBlock> = (props) => (
    <div css={styles.root} {...props}>
        <MarqueTitle css={styles.title}>{props.title}</MarqueTitle>
        <div css={styles.background}>
            <Bullhorn />
            <Bullhorn />
            <Bullhorn />
            <Bullhorn />
            <Bullhorn />
        </div>
        <Announcements {...props} />
    </div>
);

export default AnnouncementContainer;
