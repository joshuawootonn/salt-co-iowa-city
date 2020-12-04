import { AnnouncementBlock } from '../../models/announcement';
import React, { FC, useEffect, useRef, useState } from 'react';
import layout from '../../components/layout';
import { css } from 'styled-components/macro';
import Bullhorn from './announcementBackground';
import Announcements from './announcement';
import MarqueTitle from '../../components/title/marqueTitle';
import useScreenType from '../../components/useScreenType';
import { useMedia } from 'react-use';

const styles = {
    root: css`
        position: relative;
        width: 100vw;
        margin: 0 0 500px 0;
    `,
    content: css`
        ${layout.container};
    `,

    title: css`
        margin-bottom: 60px;
    `,
};

const AnnouncementContainer: FC<AnnouncementBlock> = (props) => {
    const ref = useRef(null);
    const screenType = useScreenType();

    const isMobile = useMedia('(min-width: 0px) and (max-width: 800px)');
    const [state, setState] = useState(null);

    useEffect(() => {
        if (ref.current) {
            // @ts-ignore
            setState(ref.current.getBoundingClientRect());
        }
    }, [screenType]);

    return (
        <div ref={ref} css={styles.root} {...props}>
            <Bullhorn boundingBox={state} />
            <MarqueTitle css={styles.title}>{props.title}</MarqueTitle>
            <div css={styles.content}>
                <Announcements {...props} />
            </div>
        </div>
    );
};

export default AnnouncementContainer;
