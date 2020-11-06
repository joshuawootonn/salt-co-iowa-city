import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import typography from '../../../components/typography';

const styles = {
    root: css`
        ${typography.title1};
        color: ${({ theme }) => theme.colors.blue.medium};
        opacity: 40%;
        font-size: 200px;
        width: 100%;

        white-space: nowrap;
    `,
};

const Title: FC = (props) => {
    return <h1 css={styles.root} {...props} />;
};

export default Title;
