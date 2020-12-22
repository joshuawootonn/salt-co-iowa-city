import React, { FC } from 'react';
import AnnouncementLink from './announcementLink';
import styled, { css } from 'styled-components/macro';
import { Announcement, AnnouncementBlock } from '../../models/announcement';
import { motion } from 'framer-motion';
import useScreenType, { queryShit } from '../../components/useScreenType';
import useIntersect from '../../helpers/useIntersect';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';
import chunk from 'lodash/chunk';

const Root = styled(motion.div)`
    display: grid;
    gap: 20px;
    margin-bottom: 40px;

    position: relative;

    ${queryShit({
        mobile: css`
            grid-auto-flow: row;
            justify-content: center;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            grid-template-rows: repeat(1 minmax(120px, max-content));
        `,
        tablet: css`
            grid-auto-flow: row;
            justify-content: center;

            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            grid-template-rows: repeat(1, minmax(120px, max-content));
        `,
        desktop: css`
            grid-auto-flow: column;

            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(1, minmax(0px, max-content));
        `,
    })}
`;

const Announcements: FC<AnnouncementBlock> = ({ announcements }) => {
    const type = useScreenType();

    if (type === 'mobile') {
        return chunk(announcements, 1).map((subAnnouncements, i) => (
            <Row key={i} announcements={subAnnouncements} />
        ));
    }

    if (type === 'tablet') {
        return chunk(announcements, 2).map((subAnnouncements, i) => (
            <Row key={i} announcements={subAnnouncements} />
        ));
    }

    return chunk(announcements, 3).map((subAnnouncements, i) => (
        <Row key={i} announcements={subAnnouncements} />
    ));
};

const Row: FC<{ announcements: Announcement[] }> = ({ announcements }) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0.3,
    });
    const animate = isLoaded && isVisible;

    return (
        <Root
            ref={ref}
            animate={toVariant(animate)}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.08,
                    },
                },
            }}
        >
            {announcements.map((link: any, i: number) => (
                <AnnouncementLink
                    key={i}
                    linkAnnouncement={link}
                    isOrchestrated={true}
                />
            ))}
        </Root>
    );
};

export default Announcements;
