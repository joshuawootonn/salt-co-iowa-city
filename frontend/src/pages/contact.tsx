import React, { FC } from 'react';
import ThemeContext, { primaryTheme } from '../context/themeContext';
import HeaderContainer from '../containers/header';
import ContactContainer from '../containers/contact';
import FooterContainer from '../containers/footer';
import { useContactBlock } from '../services/contact.services';
import { useFooterBlock } from '../services/footer.services';

const Contact: FC = () => {
    const contactBlock = useContactBlock();
    const footerBlock = useFooterBlock();
    return (
        <ThemeContext theme={primaryTheme}>
            <HeaderContainer />
            <ContactContainer {...contactBlock} />
            <FooterContainer {...footerBlock} />
        </ThemeContext>
    );
};
export default Contact;
