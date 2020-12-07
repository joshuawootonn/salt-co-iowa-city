import React, { FC } from 'react';
import AnnouncementLink from './announcementLink';
import styled, { css } from 'styled-components/macro';
import { AnnouncementBlock } from '../../models/announcement';
import { motion } from 'framer-motion';
import { toVariant } from '../../helpers/animation';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import layout from '../../components/layout';
import { queryShit } from '../../components/useScreenType';

const Root = styled(motion.div)`
    display: grid;
    column-gap: 20px;

    position: relative;

    ${queryShit({
        mobile: css`
            grid-auto-flow: row;
            justify-content: center;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            grid-template-rows: repeat(2, minmax(120px, max-content));

            row-gap: 40px;
        `,
        tablet: css`
            grid-auto-flow: row;
            justify-content: center;
            row-gap: 40px;

            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            grid-template-rows: repeat(2, minmax(120px, max-content));
        `,
        desktop: css`
            column-gap: 20px;
            grid-auto-flow: column;

            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, minmax(0px, max-content));
        `,
    })}
`;

const Announcements: FC<AnnouncementBlock> = ({ announcements }) => (
    <Root>
        {announcements.map((link: any, i: number) => (
            <AnnouncementLink key={i} linkAnnouncement={link} />
        ))}
    </Root>
);

export default Announcements;
