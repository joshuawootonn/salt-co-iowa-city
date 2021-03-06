import React, { FC } from 'react';
import Salt from '../../svgs/salt.svg';
import LinkedList from './linkedList';
import BigLinks from './bigLinks';
import SocialLinks from './socialLinks';
import { FooterBlock } from '../../models/footer';
import slugify from '../../helpers/slugify';
import styles from './styles';
import PersonalBranding from '../../svgs/personalBranding';
import IconAction from '../../components/iconAction';
import LogoLink from '../../components/logoLink';

interface ExtendedNavigationContainerProps extends FooterBlock {
    type: 'footer' | 'mobileNav';
    onClick?: any;
}

const ExtendedNavigationContainer: FC<ExtendedNavigationContainerProps> = ({
    externalLinks,
    howToConnectLinks,
    whoWeAreLinks,
    socialMediaLinks,
    onClick,
    type,
}) => (
    <div css={styles.root}>
        {type === 'footer' && (
            <div css={styles.logoContainer}>
                <LogoLink onClick={onClick} to={'/'} css={styles.logo} />
            </div>
        )}

        <LinkedList
            css={styles.listOne(type)}
            links={[
                { label: 'Who we Are', to: '/who-we-are' },
                ...whoWeAreLinks.map((link: string) => ({
                    label: link,
                    to: `/who-we-are/#${slugify(link)}`,
                })),
            ]}
            onClick={onClick}
        />
        <BigLinks
            onClick={onClick}
            links={externalLinks}
            css={styles.bigLinks(type)}
        />

        <LinkedList
            css={styles.listTwo(type)}
            links={[
                { label: 'Get Connected', to: '/how-to-connect' },
                ...howToConnectLinks.map((link: string) => ({
                    label: link,
                    to: `/how-to-connect/#${slugify(link)}`,
                })),
            ]}
            onClick={onClick}
        />

        <SocialLinks
            socialMediaLinks={socialMediaLinks}
            css={styles.social(type)}
        />
        {type === 'footer' && (
            <div css={styles.personalBrandingContainer}>
                <span>Made by</span>{' '}
                <IconAction href={'https://www.joshuawootonn.com/'}>
                    <PersonalBranding css={styles.personalBranding} />
                </IconAction>
            </div>
        )}
    </div>
);

export default ExtendedNavigationContainer;
