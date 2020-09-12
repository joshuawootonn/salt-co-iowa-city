import React, { FC } from 'react';
import { css } from 'styled-components';

export interface LinkAnnouncement {
    image: {
        url: string;
    };
    text: string;
    link: string;
}

interface AnnouncementLinkProps {
    linkAnnouncement: LinkAnnouncement;
}

const AnnouncementLink: FC<AnnouncementLinkProps> = ({ linkAnnouncement }) => (
    <h1
        css={css`
            background-color: lawngreen;
            width: 400px;
        `}
    >
        {linkAnnouncement.text}
    </h1>
);

export default AnnouncementLink;
