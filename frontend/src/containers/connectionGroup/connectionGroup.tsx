import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ConnectionGroupCard from './connectionGroupCard';
import styled from 'styled-components';
import useScreenType, { queryShit } from '../../components/useScreenType';
import { css } from 'styled-components/macro';
import { ConnectionGroup } from '../../models/connectionGroup';
import chunk from 'lodash/chunk';

const Root = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 40px;

    ${queryShit({
        mobile: css`
            grid-auto-flow: row;
            justify-content: center;
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
            grid-template-rows: repeat(1, minmax(120px, max-content));
        `,
        tablet: css`
            grid-auto-flow: row;
            justify-content: center;
            column-gap: 40px;

            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-template-rows: repeat(1, minmax(120px, max-content));
        `,
        desktop: css`
            column-gap: 40px;
            grid-auto-flow: column;

            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(1, minmax(0px, max-content));
        `,
    })}
`;

const ConnectionGroupComponent: FC<{ groups: ConnectionGroup[] }> = ({
    groups,
}) => {
    const type = useScreenType();

    const staffPerRow = type === 'mobile' ? 1 : type === 'tablet' ? 2 : 3;

    console.log(staffPerRow);

    return (
        <>
            {chunk(groups, staffPerRow).map((subConnectionGroups, i) => (
                <Row key={i} groups={subConnectionGroups} />
            ))}
        </>
    );
};

const Row: FC<{ groups: ConnectionGroup[] }> = ({ groups }) => {
    return (
        <AnimatePresence>
            <Root>
                {groups.map((group) => (
                    <ConnectionGroupCard {...group} key={group.id} />
                ))}
            </Root>
        </AnimatePresence>
    );
};

export default ConnectionGroupComponent;
