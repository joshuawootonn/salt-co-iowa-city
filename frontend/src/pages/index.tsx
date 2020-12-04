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
        margin-bottom: 450px;

        ${queryShit({
            mobile: css`
                margin-bottom: 210px;
            `,
        })}
    `,
    announcements: css`
        margin-bottom: 450px;

        ${queryShit({
            mobile: css`
                margin-bottom: 150px;
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
            <WelcomeContainer css={styles.intro} {...welcomeBlock} />
            <AnnouncementContainer
                css={styles.announcements}
                {...announcementBlock}
            />
        </Page>
    );
};

export default Home;
