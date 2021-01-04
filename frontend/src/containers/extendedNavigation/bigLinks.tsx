import React, { FC } from 'react';
import TextLink from '../../components/textLink';
import { css } from 'styled-components/macro';
import { ExternalLink } from '../../models/footer';
import { queryShit } from '../../components/useScreenType';

const styles = {
    content: css`
        overflow: visible;
        white-space: nowrap;

        ${queryShit({
            mobile: css`
                margin-bottom: 30px;
            `,
        })}
    `,
    link: css`
        overflow: visible;
        display: inline-block;
    `,
};

interface BigLinksProps {
    links: ExternalLink[];
    onClick?: any;
}

const BigLinks: FC<BigLinksProps> = (props) => (
    <div css={styles.content} {...props}>
        <TextLink
            destinationType={'internal'}
            to={'/contact'}
            css={styles.link}
            size={'small'}
        >
            Contact us
        </TextLink>

        {props.links.map((link, i) => (
            <React.Fragment key={i}>
                <br />
                <br />
                <TextLink
                    destinationType={'external'}
                    href={link.href}
                    css={styles.link}
                    size={'small'}
                    onClick={props.onClick}
                >
                    {link.label}
                </TextLink>
            </React.Fragment>
        ))}
    </div>
);

export default BigLinks;
