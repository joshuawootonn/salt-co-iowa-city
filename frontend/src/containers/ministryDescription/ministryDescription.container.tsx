import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import MinistryDescriptionCard from './ministryDescriptionCard';
import { MinistryDescriptionBlock } from '../../models/ministryDescription';

const styles = {
    root: css`
        ${layout.container};
    `,
    title: css`
        margin-bottom: 40px;
    `,
    itemsContainer: css`
        display: flex;
        flex-direction: column;

        & > div:not(:last-child) {
            margin-bottom: 210px;
        }
    `,
};

const MinistryDescriptionContainer: FC<MinistryDescriptionBlock> = (props) => {
    return (
        <div css={styles.root} {...props}>
            <div css={styles.itemsContainer}>
                {props.ministryDescriptions.map((s, i) => (
                    <MinistryDescriptionCard key={i} {...s} />
                ))}
            </div>
        </div>
    );
};

export default MinistryDescriptionContainer;
