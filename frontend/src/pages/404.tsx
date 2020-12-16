import React, { FC } from 'react';
import Page from '../components/page';
import { css } from 'styled-components/macro';
import { queryShit } from '../components/useScreenType';
import SeoComponent from '../components/seo';
import { Title } from '../components/title';

const styles = {
    root: css`
        min-height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
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
    return (
        <Page>
            <SeoComponent
                title={404}
                isTitleTemplated={true}
                description={'How did you get here?'}
                image={'/404.png'}
            />
            <div css={styles.root}>
                <Title>404</Title>
            </div>
        </Page>
    );
};
export default Contact;
