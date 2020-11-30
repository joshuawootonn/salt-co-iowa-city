import { AnnouncementBlock } from '../../models/announcement';
import React, { FC, useEffect, useRef } from 'react';
import layout from '../../components/layout';
import { css } from 'styled-components/macro';
import Bullhorn from '../../svgs/bullhorn.svg';
import Announcements from './announcement';
import MarqueTitle from '../../components/title/marqueTitle';
import { queryShit } from '../../components/useScreenType';
import { useMedia } from 'react-use';

const styles = {
    root: css`
        ${layout.container};

        width: 100vw;
        max-width: 100vw;
        margin-bottom: 500px;
    `,
    content: css`
        width: 100%;
    `,
    background: css`
        position: absolute;
        z-index: -1;
        top: 0;
        left: -5vw;
        transform: translate3d(0, -20%, 0);
        width: 110vw;

        min-width: 725px;

        ${queryShit({
            mobile: css`
                height: 120%;
                transform: translate3d(0, -8%, 0);
            `,
            tablet: css`
                height: 190%;
            `,
        })}
    `,
    title: css`
        margin-bottom: 60px;
    `,
};

const AnnouncementContainer: FC<AnnouncementBlock> = (props) => {
    const isMobile = useMedia('(min-width: 0px) and (max-width: 800px)');

    return (
        <div css={styles.root} {...props}>
            <MarqueTitle css={styles.title}>{props.title}</MarqueTitle>
            <div css={styles.background}>
                {new Array(isMobile ? 19 : 5).fill('').map((e, i) => (
                    <Bullhorn key={i} />
                ))}
            </div>
            <Announcements {...props} />
        </div>
    );
};

export default AnnouncementContainer;
