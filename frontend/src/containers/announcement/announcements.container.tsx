import { AnnouncementBlock } from '../../models/announcement';
import React, { FC } from 'react';
import layout from '../../components/layout';
import { css } from 'styled-components/macro';
import { IntersectionObserver } from '../../components/IntersectionObserver';
import Announcements from './announcement';

const styles = {
    root: css`
        ${layout.container};
        margin-bottom: 500px;
    `,
};

const AnnouncementContainer: FC<AnnouncementBlock> = (props) => (
    <IntersectionObserver css={styles.root} {...props}>
        <Announcements {...props} />
    </IntersectionObserver>
);

export default AnnouncementContainer;
