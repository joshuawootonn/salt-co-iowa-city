import React, { FC, useEffect } from 'react';
import AnnouncementLink from './announcementLink';
import styled, { css } from 'styled-components/macro';
import { Announcement, AnnouncementBlock } from '../../models/announcement';
import { motion, useAnimation } from 'framer-motion';
import useScreenType, { queryShit } from '../../components/useScreenType';
import useIntersect from '../../helpers/useIntersect';
import { useFontLoader } from '../../context/fontLoader';
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

    const announcementsPerRow =
        type === 'mobile' ? 2 : type === 'tablet' ? 2 : 3;

    return (
        <>
            {chunk(announcements, announcementsPerRow).map(
                (subAnnouncements, i) => (
                    <Row key={i} announcements={subAnnouncements} />
                )
            )}
        </>
    );
};

const Row: FC<{ announcements: Announcement[] }> = ({ announcements }) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0.3,
    });
    const screenType = useScreenType();

    const controls = useAnimation();

    useEffect(() => {
        if (isVisible && isLoaded) {
            controls.start('entered');
        }
    }, [isVisible, isLoaded, screenType]);

    return (
        <Root
            ref={ref}
            animate={controls}
            initial={'exited'}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.08,
                    },
                },
            }}
        >
            {announcements.map((link, i: number) => (
                <AnnouncementLink
                    key={link.link + link.text}
                    linkAnnouncement={link}
                    isOrchestrated={true}
                />
            ))}
        </Root>
    );
};

export default Announcements;
