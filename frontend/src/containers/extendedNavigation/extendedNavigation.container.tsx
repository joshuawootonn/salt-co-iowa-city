import React, { FC } from 'react';
import Salt from '../../svgs/salt.svg';
import LinkedList from './linkedList';
import BigLinks from './bigLinks';
import SocialLinks from './socialLinks';
import { FooterBlock } from '../../models/footer';
import slugify from '../../helpers/slugify';
import styles from './styles';

interface ExtendedNavigationContainerProps extends FooterBlock {
    type: 'footer' | 'mobileNav';
}

const ExtendedNavigationContainer: FC<ExtendedNavigationContainerProps> = ({
    externalLinks,
    howToConnectLinks,
    whoWeAreLinks,
    type,
}) => (
    <div css={styles.root}>
        {type === 'footer' && (
            <div css={styles.logoContainer}>
                <Salt css={styles.logo} />
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
        />
        <BigLinks links={externalLinks} css={styles.bigLinks(type)} />

        <LinkedList
            css={styles.listTwo(type)}
            links={[
                { label: 'Get Connected', to: '/how-to-connect' },
                ...howToConnectLinks.map((link: string) => ({
                    label: link,
                    to: `/how-to-connect/#${slugify(link)}`,
                })),
            ]}
        />

        <SocialLinks css={styles.social(type)} />
    </div>
);

export default ExtendedNavigationContainer;
