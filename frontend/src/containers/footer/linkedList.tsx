import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import TextLink from '../../components/textLink';
import { ExternalLink, InternalLink } from '../../models/footer';

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
    `,
};

interface LinkedListProps {
    links: InternalLink[];
}

const LinkedList: FC<LinkedListProps> = ({ links }) => {
    return (
        <div css={styles.root}>
            {links.map((link, i) => (
                <TextLink
                    destinationType={'internal'}
                    type={'secondary'}
                    key={i}
                    size={i !== 0 ? 'small' : 'default'}
                    to={link.to}
                >
                    {link.label}
                </TextLink>
            ))}
        </div>
    );
};

export default LinkedList;
