import React, { FC } from 'react';
import WelcomeContainer from '../containers/welcome';
import { css } from 'styled-components/macro';
import AnnouncementContainer from '../containers/announcement';
import { useAnnouncementBlock } from '../services/announcement.services';
import { useWelcomeBlock } from '../services/welcome.services';
import { queryShit } from '../components/useScreenType';
import Page from '../components/page';
import SeoComponent from '../components/seo';
import { useTitleScoller } from '../helpers/scroll';

const styles = {
    intro: css`
        ${queryShit({
            mobile: css`
                margin-bottom: 210px;
            `,
            tablet: css`
                margin-bottom: 300px;
            `,
            desktop: css`
                margin-bottom: 450px;
            `,
        })}
    `,
    announcements: css`
        ${queryShit({
            mobile: css`
                margin-bottom: 150px;
            `,
            tablet: css`
                margin-bottom: 350px;
            `,
            desktop: css`
                margin-bottom: 450px;
            `,
        })}
    `,
};

const Home: FC = () => {
    const welcomeBlock = useWelcomeBlock();
    const announcementBlock = useAnnouncementBlock();

    useTitleScoller();

    return (
        <Page>
            <SeoComponent
                title={welcomeBlock.title}
                isTitleTemplated={false}
                description={
                    'We are a college ministry composed of students who are defined by Christ. Join us for worship!'
                }
                image={'/index.png'}
            />
            <WelcomeContainer css={styles.intro} welcomeBlock={welcomeBlock} />
            <AnnouncementContainer
                css={styles.announcements}
                announcementBlock={announcementBlock}
            />
        </Page>
    );
};

export default Home;
