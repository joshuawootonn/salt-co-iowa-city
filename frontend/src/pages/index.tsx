import React, { FC, useRef, useState } from 'react';
import ThemeContext, { primaryTheme } from '../context/themeContext';
import WelcomeContainer from '../containers/welcome';
import { css } from 'styled-components/macro';
import AnnouncementContainer from '../containers/announcement';
import FooterContainer from '../containers/footer';
import { useAnnouncementBlock } from '../services/announcement.services';
import { useWelcomeBlock } from '../services/welcome.services';
import { useFooterBlock } from '../services/footer.services';
import { useTitleScoller } from '../components/title';

const styles = {
    intro: css`
        margin-bottom: 250px;
    `,
    announcements: css`
        margin-bottom: 450px;
    `,
};

/**
 alert('Roboto loaded? ' + document.fonts.check('1em Roboto'));  // false

 document.fonts.ready.then(function () {
  alert('All fonts in use by visible text have loaded.');
   alert('Roboto loaded? ' + document.fonts.check('1em Roboto'));  // true
});

 document.fonts.onloadingdone = function (fontFaceSetEvent) {
   alert('onloadingdone we have ' + fontFaceSetEvent.fontfaces.length + ' font faces loaded');
};
 */

const Home: FC = () => {
    const welcomeBlock = useWelcomeBlock();
    const announcementBlock = useAnnouncementBlock();
    const footerBlock = useFooterBlock();

    useTitleScoller();

    return (
        <ThemeContext theme={primaryTheme}>
            <WelcomeContainer css={styles.intro} {...welcomeBlock} />
            <AnnouncementContainer
                css={styles.announcements}
                {...announcementBlock}
            />
            <FooterContainer {...footerBlock} />
        </ThemeContext>
    );
};

export default Home;
