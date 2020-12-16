import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import typography from '../../../components/typography';
import { queryShit } from '../../../components/useScreenType';

const styles = {
    root: css`
        ${typography.title1};

        color: ${({ theme }) => theme.colors.blue.light};

        white-space: normal !important;
        ${queryShit({
            mobile: css`
                font-size: 25px;
                width: 100%;
            `,
            tablet: css`
                font-size: 35px;
                width: 100%;
            `,
            desktop: css`
                font-size: 60px;
                transform: translateY(-20px);
            `,
        })}

        flex-shrink: 0;
    `,
};

const SubTitle: FC = (props) => {
    return <h2 {...props} css={styles.root} />;
};

export default SubTitle;
