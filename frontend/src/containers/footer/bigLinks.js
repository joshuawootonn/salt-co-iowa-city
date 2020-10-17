import React, { FC } from 'react';
import TextLink from '../../components/textLink';
import { css } from 'styled-components/macro';

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

const BigLinks = (props) => (
    <div css={styles.content} {...props}>
        <TextLink
            destinationType={'internal'}
            to={'/contact'}
            css={styles.link}
        >
            Contact us
        </TextLink>

        <br />
        <br />
        <TextLink css={styles.link} href="">
            Our home church
        </TextLink>
    </div>
);

export default BigLinks;
