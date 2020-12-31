import { AnnouncementBlock } from '../../models/announcement';
import React, { FC, useEffect, useRef, useState } from 'react';
import layout from '../../components/layout';
import { css } from 'styled-components/macro';
import Bullhorn from './announcementBackground';
import Announcements from './announcement';
import MarqueTitle from '../../components/title/marqueTitle';
import useScreenType from '../../components/useScreenType';

const styles = {
    root: css`
        position: relative;
        margin: 0 0 500px 0;
    `,
    content: css`
        ${layout.container};
    `,

    title: css`
        margin-bottom: 60px;
    `,
};

const AnnouncementContainer: FC<{ announcementBlock: AnnouncementBlock }> = ({
    announcementBlock,
    ...props
}) => {
    const ref = useRef(null);
    const screenType = useScreenType();
    const [boundingBox, setBoundingBox] = useState(null);

    useEffect(() => {
        if (ref.current) {
            // @ts-ignore
            setBoundingBox(ref.current.getBoundingClientRect());
        }
    }, [screenType]);

    return (
        <div ref={ref} css={styles.root} {...props}>
            <Bullhorn boundingBox={boundingBox} />
            <MarqueTitle css={styles.title}>
                {announcementBlock.title}
            </MarqueTitle>
            <div css={styles.content}>
                <Announcements {...announcementBlock} />
            </div>
        </div>
    );
};

export default AnnouncementContainer;
