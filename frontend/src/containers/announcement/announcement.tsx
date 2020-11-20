import React, { FC } from 'react';
import AnnouncementLink from '../../components/announcementLink';
import styled, { css } from 'styled-components/macro';
import { AnnouncementBlock } from '../../models/announcement';
import { motion } from 'framer-motion';
import { toVariant } from '../../helpers/animation';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import layout from '../../components/layout';

const Root = styled(motion.div)`
    ${layout.container};
    display: grid;
    column-gap: 20px;
    grid-auto-flow: column;
    position: relative;
`;

// ${queryShit({
//     mobile: css`
//         grid-auto-flow: row;
//     `,
// })}
const Announcements: FC<AnnouncementBlock> = ({ announcements }) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref);
    return (
        <Root animate={toVariant(isVisible && isLoaded)}>
            {announcements.map((link: any, i: number) => (
                <AnnouncementLink key={i} linkAnnouncement={link} />
            ))}
        </Root>
    );
};

export default Announcements;
