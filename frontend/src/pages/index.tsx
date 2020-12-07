import React, { FC } from 'react';
import WelcomeContainer from '../containers/welcome';
import { css } from 'styled-components/macro';
import AnnouncementContainer from '../containers/announcement';
import { useAnnouncementBlock } from '../services/announcement.services';
import { useWelcomeBlock } from '../services/welcome.services';
import { useTitleScoller } from '../components/title/utils';
import { queryShit } from '../components/useScreenType';
import Page from '../components/page';

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

    console.log(announcementBlock);

    useTitleScoller();

    return (
        <Page>
            <WelcomeContainer css={styles.intro} {...welcomeBlock} />
            <AnnouncementContainer
                css={styles.announcements}
                {...announcementBlock}
            />
        </Page>
    );
};

export default Home;
