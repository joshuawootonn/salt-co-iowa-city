import React, { FC } from 'react';
import { MinistryConnectionBlock } from '../../services/ministryConnection.service';
import MinistryConnectionCard from './ministryConnection';

const MinistryConnectionContainer: FC<MinistryConnectionBlock> = (props) => (
    <>
        {props.ministryConnections.map((connection, i) => (
            <MinistryConnectionCard {...connection} key={i} />
        ))}
    </>
);

export default MinistryConnectionContainer;
