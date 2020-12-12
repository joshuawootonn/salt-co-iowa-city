import React, { FC } from 'react';
import { MinistryConnection } from '../../../models/ministryConnection';
import Leaf from './leaf.svg';
import World from './world.svg';
import { css } from 'styled-components/macro';
import { queryShit } from '../../../components/useScreenType';

const LeafBackground = () => (
    <Leaf
        css={css`
            position: absolute;
            bottom: 0;
            right: 40%;
            ${queryShit({
                mobile: css`
                    width: 200px;
                    transform: translate3d(-45%, 85%, 0) rotate(-165deg);
                `,
                tablet: css`
                    width: 250px;
                    transform: translate3d(-75%, 30%, 0) rotate(-75deg);
                `,
                desktop: css`
                    width: 350px;
                    transform: translate3d(-15%, 50%, 0) rotate(-105deg);
                `,
            })}
        `}
    />
);

const WorldBackground = () => (
    <World
        css={css`
            position: absolute;
            bottom: 0;
            right: 40%;

            ${queryShit({
                mobile: css`
                    width: 250px;
                    transform: translate3d(45%, 40%, 0) rotate(-75deg);
                `,
                tablet: css`
                    width: 250px;
                    transform: translate3d(25%, 30%, 0) rotate(-75deg);
                `,
                desktop: css`
                    width: 350px;
                    transform: translate3d(55%, 30%, 0) rotate(-75deg);
                `,
            })}
        `}
    />
);

const EventBackground: FC<MinistryConnection> = ({ backgroundImage }) => {
    return backgroundImage === 'Leaf' ? (
        <LeafBackground />
    ) : (
        <WorldBackground />
    );
};

export default EventBackground;
