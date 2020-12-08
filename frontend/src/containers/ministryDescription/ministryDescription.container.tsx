import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import MinistryDescriptionCard from './ministryDescriptionCard';
import { MinistryDescriptionBlock } from '../../models/ministryDescription';
import { queryShit } from '../../components/useScreenType';

const styles = {
    root: css`
        ${layout.container};
    `,
    cardContainer: css`
        display: flex;
        flex-direction: column;

        ${queryShit({
            mobile: css`
                margin-bottom: 100px;
            `,
            tablet: css`
                margin-bottom: 50px;
            `,
            desktop: css`
                margin-bottom: 100px;
            `,
        })}
    `,
};

const MinistryDescriptionContainer: FC<MinistryDescriptionBlock> = (props) => {
    return (
        <div css={styles.root} {...props}>
            {props.ministryDescriptions.map((s, i) => (
                <div key={i} css={styles.cardContainer}>
                    <MinistryDescriptionCard {...s} index={i} />
                </div>
            ))}
        </div>
    );
};

export default MinistryDescriptionContainer;
