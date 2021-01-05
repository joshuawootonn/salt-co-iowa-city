import React from 'react';
import { css } from 'styled-components/macro';
import typography from '../../../components/typography';
import { queryShit } from '../../../components/useScreenType';
import { Title } from '../../../components/title';

const styles = {
    title: css`
        ${typography.title1};
        color: ${({ theme }) => theme.colors.blue.medium};
        opacity: 50%;
        width: 100%;

        ${queryShit({
            mobile: css`
                width: 100%;
                font-size: 40px;
                white-space: normal;
                text-align: center;
            `,
            tablet: css`
                width: 100%;
                font-size: 80px;
                white-space: normal;
                text-align: center;
            `,
            desktop: css`
                width: 100%;
                font-size: 130px;
                white-space: normal;
                text-align: center;
            `,
        })}
    `,
};

const animationProps = {
    variants: {
        entered: { y: 0, opacity: 0.4, rotate: '0deg' },
        exited: { y: 40, opacity: 0, rotate: '3deg' },
    },
};

const BigTitle = (props) => (
    <Title
        isClickable={false}
        {...animationProps}
        isOrchestrated={true}
        css={styles.title}
        {...props}
    />
);

export default BigTitle;
