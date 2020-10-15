import React, { FC } from 'react';
import { MinistryConnectionBlock } from '../../__stories__/services/ministryConnection.service';
import MinistryConnectionCard from './ministryConnection';

import { css } from 'styled-components/macro';

const styles = {
    root: css`
        & > div {
            margin-bottom: 200px;
        }
    `,
};
const MinistryConnectionContainer: FC<MinistryConnectionBlock> = (props) => (
    <div css={styles.root} {...props}>
        {props.ministryConnections.map((connection, i) => (
            <MinistryConnectionCard {...connection} key={i} />
        ))}
    </div>
);

export default MinistryConnectionContainer;
