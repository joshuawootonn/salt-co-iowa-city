import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import TextLink from '../../components/textLink';

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
    `,
};

export interface Link {
    href: string;
    label: string;
}
interface LinkedListProps {
    links: Link[];
}

const LinkedList: FC<LinkedListProps> = ({ links }) => {
    return (
        <div css={styles.root}>
            {links.map((link, i) => (
                <TextLink
                    type={'secondary'}
                    key={i}
                    size={i !== 0 ? 'small' : 'default'}
                    href={link.href}
                >
                    {link.label}
                </TextLink>
            ))}
        </div>
    );
};

export default LinkedList;
