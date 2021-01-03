import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import TextLink from '../../components/textLink';
import { InternalLink } from '../../models/footer';
import { queryShit } from '../../components/useScreenType';

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        ${queryShit({
            mobile: css`
                margin-bottom: 30px;
            `,
        })}
    `,
    link: css`
        padding-left: 0;
    `,
};

interface LinkedListProps {
    links: InternalLink[];
    onClick?: any;
}

const LinkedList: FC<LinkedListProps> = ({ links, onClick, ...props }) => {
    return (
        <div css={styles.root} {...props}>
            {links.map((link, i) => (
                <TextLink
                    css={styles.link}
                    destinationType={'internal'}
                    type={'secondary'}
                    key={i}
                    size={i !== 0 ? 'small' : 'default'}
                    font={i !== 0 ? 'secondary' : 'primary'}
                    to={link.to}
                    onClick={onClick}
                >
                    {link.label}
                </TextLink>
            ))}
        </div>
    );
};

export default LinkedList;
