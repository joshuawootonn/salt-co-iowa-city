import React, { FC } from 'react';
import ThemeContext, { primaryTheme } from '../context/themeContext';
import HeaderContainer from '../containers/header';
import ContactContainer from '../containers/contact';
import FooterContainer from '../containers/footer';
import { useContactBlock } from '../services/contact.services';
import { useFooterBlock } from '../services/footer.services';
import { useTitleScoller } from '../components/title';
import { useConnectionGroupBlock } from '../services/connectionGroup.services';

const Contact: FC = () => {
    const contactBlock = useContactBlock();
    const footerBlock = useFooterBlock();
    const connectionGroupBlock = useConnectionGroupBlock();
    useTitleScoller();

    return (
        <ThemeContext theme={primaryTheme}>
            <HeaderContainer />
            <ContactContainer {...contactBlock} {...connectionGroupBlock} />
            <FooterContainer {...footerBlock} />
        </ThemeContext>
    );
};
export default Contact;
