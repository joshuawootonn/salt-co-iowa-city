import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import typography from '../../../components/typography';
import { queryShit } from '../../../components/useScreenType';
import Text from '../../../components/text';

const styles = {
    root: css`
        ${typography.title2};

        color: ${({ theme }) => theme.colors.blue.light};
        white-space: normal !important;
        flex-shrink: 0;
        max-width: 100%;
        width: 100%;

        ${queryShit({
            mobile: css`
                font-size: 18px;
            `,
            tablet: css`
                font-size: 35px;
            `,
            desktop: css`
                font-size: 55px;
            `,
        })}
    `,
};

const SubTitle: FC = (props) => {
    return (
        <Text
            isOrchestrated={true}
            variant={'small'}
            css={styles.root}
            {...props}
        />
    );
};

export default SubTitle;
