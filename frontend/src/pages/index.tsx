import React, { FC } from 'react';
import ThemeContext, { primaryTheme } from '../context/themeContext';
import WelcomeContainer from '../containers/welcome';
import { css } from 'styled-components/macro';
import { WelcomeBlock } from '../__stories__/services/welcome.services';
import { AnnouncementBlock } from '../__stories__/services/announcements.services';
import AnnouncementContainer from '../containers/announcement';
import FooterContainer from '../containers/footer';
import { graphql, useStaticQuery } from 'gatsby';
import { useAnnouncementBlock } from '../services/announcement.services';

const styles = {
    intro: css`
        margin-bottom: 250px;
    `,
    announcements: css`
        margin-bottom: 450px;
    `,
};

export const useWelcomeBlock = (): WelcomeBlock => {
    const welcomeBlock = useStaticQuery(graphql`
        query blockWelcome {
            allContentfulBlockWelcome(limit: 1) {
                nodes {
                    title
                    introWhoWeAre
                    introGetConnected
                    images {
                        fluid(maxWidth: 500, quality: 90) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    `);

    return welcomeBlock.allContentfulBlockWelcome.nodes[0];
};

const Home: FC = () => {
    const welcomeBlock = useWelcomeBlock();
    const announcementBlock = useAnnouncementBlock();

    return (
        <ThemeContext theme={primaryTheme}>
            <WelcomeContainer css={styles.intro} {...welcomeBlock} />
            <AnnouncementContainer
                css={styles.announcements}
                {...announcementBlock}
            />
            <FooterContainer />
        </ThemeContext>
    );
};

export default Home;
