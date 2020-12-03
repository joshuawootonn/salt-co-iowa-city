import React, { FC } from 'react';
import ContactContainer from '../containers/contact';
import { useContactBlock } from '../services/contact.services';
import { useTitleScoller } from '../components/title/utils';
import { useConnectionGroupBlock } from '../services/connectionGroup.services';
import Page from '../components/page';

const Contact: FC = () => {
    const contactBlock = useContactBlock();
    const connectionGroupBlock = useConnectionGroupBlock();
    useTitleScoller();

    return (
        <Page>
            <ContactContainer {...connectionGroupBlock} {...contactBlock} />
        </Page>
    );
};
export default Contact;
