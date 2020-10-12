import React, { FC } from 'react';
import ThemeContext, { primaryTheme } from '../src/context/themeContext';
import Head from 'next/head';
import FooterContainer from '../src/containers/footer';
import HeaderContainer from '../src/containers/header/header.container';
import { ContactBlock, getContactBlock } from '../src/services/contact.service';
import ContactContainer from '../src/containers/contact';

export interface ContactProps {
    contactBlock: ContactBlock;
}

const Contact: FC<ContactProps> = (props) => {
    console.log(props);
    return (
        <ThemeContext theme={primaryTheme}>
            <Head>
                <title>Salt Company Iowa City</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderContainer />
            <ContactContainer {...props.contactBlock} />
            <FooterContainer />
        </ThemeContext>
    );
};
export async function getStaticProps() {
    const contactBlock = await getContactBlock();

    return { props: { contactBlock } };
}

export default Contact;
