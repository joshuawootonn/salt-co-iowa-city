import React, { FC } from 'react';
import ThemeContext, { primaryTheme } from '../context/themeContext';
import WelcomeContainer from '../containers/welcome';
import styled, { css } from 'styled-components/macro';
import AnnouncementContainer from '../containers/announcement';
import FooterContainer from '../containers/footer';
import { useAnnouncementBlock } from '../services/announcement.services';
import { useWelcomeBlock } from '../services/welcome.services';
import { useFooterBlock } from '../services/footer.services';
import { useTitleScoller } from '../components/title/utils';
import HeaderContainer from '../containers/header';
import { queryShit } from '../components/useScreenType';

const PageRoot = styled.div`
    overflow-x: hidden;
`;

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
    const footerBlock = useFooterBlock();

    useTitleScoller();

    return (
        <ThemeContext theme={primaryTheme}>
            <PageRoot>
                <HeaderContainer />
                <WelcomeContainer css={styles.intro} {...welcomeBlock} />
                <AnnouncementContainer
                    css={styles.announcements}
                    {...announcementBlock}
                />
                <FooterContainer {...footerBlock} />
            </PageRoot>
        </ThemeContext>
    );
};

export default Home;
