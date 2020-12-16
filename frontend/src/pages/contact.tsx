import React, { FC } from 'react';
import ContactContainer from '../containers/contact';
import { useContactBlock } from '../services/contact.services';
import { useTitleScoller } from '../components/title/utils';
import { useConnectionGroupBlock } from '../services/connectionGroup.services';
import Page from '../components/page';
import { css } from 'styled-components/macro';
import { queryShit } from '../components/useScreenType';
import SeoComponent from '../components/seo';

const styles = {
    contact: css`
        ${queryShit({
            mobile: css`
                margin-top: 120px;
                margin-bottom: 120px;
            `,
            tablet: css`
                margin-top: 140px;
                margin-bottom: 140px;
            `,
            desktop: css`
                margin-top: 180px;
                margin-bottom: 300px;
            `,
        })}
    `,
};

const Contact: FC = () => {
    const contactBlock = useContactBlock();
    const connectionGroupBlock = useConnectionGroupBlock();
    useTitleScoller();

    return (
        <Page>
            <SeoComponent
                title={contactBlock.title}
                isTitleTemplated={true}
                description={
                    'Get connected with someone from staff or one of our student leaders. We seek to be his hands and feet.'
                }
                image={'/contact.png'}
            />
            <ContactContainer
                {...connectionGroupBlock}
                {...contactBlock}
                css={styles.contact}
            />
        </Page>
    );
};
export default Contact;
