import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import SocialLink from '../../components/socialLink';

const styles = {
    root: css`
        a {
            margin-left: 20px;
        }
    `,
};

const SocialLinks = (props) => (
    <div css={styles.root} {...props}>
        <SocialLink type={'instagram'} href={''} />
        <SocialLink type={'youtube'} href={''} />
        <SocialLink type={'vimeo'} href={''} />
    </div>
);

export default SocialLinks;
