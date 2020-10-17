import React, { FC } from 'react';
import TextLink from '../../components/textLink';
import { css } from 'styled-components/macro';
import { ExternalLink } from '../../models/footer';

const styles = {
    content: css`
        overflow: visible;
        white-space: nowrap;
    `,
    link: css`
        overflow: visible;
        display: inline-block;
    `,
};

interface BigLinksProps {
    links: ExternalLink[];
}

const BigLinks: FC<BigLinksProps> = (props) => (
    <div css={styles.content} {...props}>
        <TextLink
            destinationType={'internal'}
            to={'/contact'}
            css={styles.link}
        >
            Contact us
        </TextLink>

        {props.links.map((link, i) => (
            <>
                <br />
                <br />
                <TextLink
                    destinationType={'external'}
                    href={link.href}
                    css={styles.link}
                >
                    {link.label}
                </TextLink>
            </>
        ))}
    </div>
);

export default BigLinks;
