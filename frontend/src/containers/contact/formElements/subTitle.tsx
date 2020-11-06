import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import typography from '../../../components/typography';

const styles = {
    root: css`
        ${typography.title1};

        color: ${({ theme }) => theme.colors.blue.light};
        font-size: 60px;
        transform: translateY(-20px);

        width: 400px;
        flex-shrink: 0;
    `,
};

const SubTitle: FC = (props) => {
    return <h2 css={styles.root} {...props} />;
};

export default SubTitle;
