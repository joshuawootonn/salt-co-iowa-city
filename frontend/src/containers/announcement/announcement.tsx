import React, { FC } from 'react';
import { useIntersectionObserver } from '../../components/IntersectionObserver';
import Title from '../../components/title';
import Bullhorn from '../../svgs/bullhorn.svg';
import AnnouncementLink from '../../components/announcementLink';
import { css } from 'styled-components/macro';
import { AnnouncementBlock } from '../../models/announcement';
import { motion } from 'framer-motion';
import { toVariant } from '../../helpers/animation';
import { queryShit } from '../../components/useScreenType';

const styles = {
    announcements: css`
        display: grid;
        column-gap: 20px;
        grid-auto-flow: column;
        position: relative;
        
        ${queryShit({
            mobile: css`
                grid-auto-flow: row;
            `,
        })}
    })
    `,

    background: css`
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -47%);
        width: 110vw;
        height: auto;
        overflow: hidden;
    `,
    title: css`
        margin-bottom: 60px;
    `,
};
const Announcements: FC<AnnouncementBlock> = ({ title, announcements }) => {
    const { isVisible } = useIntersectionObserver();
    return (
        <motion.div animate={toVariant(isVisible)}>
            <Title variant="small" css={styles.title}>
                {title}
            </Title>
            <div css={styles.background}>
                <Bullhorn />
                <Bullhorn />
                <Bullhorn />
                <Bullhorn />
                <Bullhorn />
            </div>
            <div css={styles.announcements}>
                {announcements.map((link: any, i: number) => (
                    <AnnouncementLink key={i} linkAnnouncement={link} />
                ))}
            </div>
        </motion.div>
    );
};

export default Announcements;
