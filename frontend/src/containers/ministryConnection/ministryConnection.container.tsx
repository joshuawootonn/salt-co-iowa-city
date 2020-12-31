import React, { FC } from 'react';
import DescriptionSection from './descriptionSection';
import { css } from 'styled-components/macro';
import { MinistryConnectionBlock } from '../../models/ministryConnection';
import EventSection from './eventSection';
import { queryShit } from '../../components/useScreenType';

const styles = {
    lastElement: css`
        ${queryShit({
            mobile: css`
                margin-bottom: 400px;
            `,
            tablet: css`
                margin-bottom: 450px;
            `,
            desktop: css`
                margin-bottom: 500px;
            `,
        })}
    `,
};
const MinistryConnectionContainer: FC<{
    ministryConnectionBlock: MinistryConnectionBlock;
}> = ({ ministryConnectionBlock, ...props }) => (
    <div {...props}>
        {ministryConnectionBlock.ministryConnections.map((connection, i) => (
            <div css={styles.lastElement} key={i}>
                <DescriptionSection {...connection} />
                {connection.nextEvent && <EventSection {...connection} />}
            </div>
        ))}
    </div>
);

export default MinistryConnectionContainer;
