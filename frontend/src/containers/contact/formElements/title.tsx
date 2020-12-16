import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import typography from '../../../components/typography';
import { queryShit } from '../../../components/useScreenType';

const styles = {
    root: css`
        ${typography.title1};
        color: ${({ theme }) => theme.colors.blue.medium};
        opacity: 40%;
        width: 100%;

        ${queryShit({
            mobile: css`
                width: 100%;
                font-size: 60px;
                white-space: normal;
                text-align: center;
                margin-bottom: 20px;
            `,
            tablet: css`
                width: 100%;
                font-size: 130px;
                white-space: normal;
                text-align: center;
            `,
            desktop: css`
                width: 100%;
                font-size: 158px;
                white-space: normal;
                text-align: center;
            `,
        })}
    `,
};

const Title: FC = (props) => {
    return <h1 css={styles.root} {...props} />;
};

export default Title;
