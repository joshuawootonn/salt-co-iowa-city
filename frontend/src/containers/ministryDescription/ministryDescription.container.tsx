import React, { FC } from 'react';
import { css } from 'styled-components';
import layout from '../../components/layout';
import typography from '../../components/typography';
import MinistryDescriptionCard from './ministryDescriptionCard';
import { MinistryDescriptionBlock } from '../../services/ministryDescription.service';

const styles = {
    root: css`
        ${layout.container};
    `,
    title: css`
        ${typography.title2};
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

const MinistryDescriptionContainer: FC<MinistryDescriptionBlock> = (props) => (
    <div css={styles.root} {...props}>
        <h2 css={styles.title}>{props.title}</h2>
        <div css={styles.itemsContainer}>
            {props.ministryDescriptions.map((s, i) => (
                <MinistryDescriptionCard key={i} {...s} />
            ))}
        </div>
    </div>
);

export default MinistryDescriptionContainer;
