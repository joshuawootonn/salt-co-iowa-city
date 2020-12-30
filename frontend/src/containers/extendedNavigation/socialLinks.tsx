import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import SocialLink from '../../components/socialLink';
import { FooterBlock } from '../../models/footer';

const styles = {
    root: css`
        a:not(:first-child) {
            margin-left: 20px;
        }
    `,
};

const SocialLinks: FC<{
    socialMediaLinks: FooterBlock['socialMediaLinks'];
}> = (props) => (
    <div css={styles.root} {...props}>
        {props.socialMediaLinks.map((socialMediaLink) => (
            <SocialLink
                key={socialMediaLink.href}
                type={socialMediaLink.type}
                href={socialMediaLink.href}
            />
        ))}
    </div>
);

export default SocialLinks;
