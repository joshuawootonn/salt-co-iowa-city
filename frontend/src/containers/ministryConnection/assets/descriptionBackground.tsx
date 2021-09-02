import React, { FC } from 'react';
import { MinistryConnection } from '../../../models/ministryConnection';
import Leaf from './leaf.svg';
import World from './world.svg';
import { css } from 'styled-components/macro';
import { queryShit } from '../../../components/useScreenType';

const LeafBackground = () => (
    <>
        <Leaf
            css={css`
                position: absolute;
                top: 0;
                right: 0;

                ${queryShit({
                    mobile: css`
                        width: 200px;
                        transform: translate3d(5%, -70%, 0) rotate(30deg);
                    `,
                    tablet: css`
                        width: 250px;
                        transform: translate3d(5%, -70%, 0) rotate(30deg);
                    `,
                    desktop: css`
                        width: 300px;
                        transform: translate3d(20%, -70%, 0) rotate(30deg);
                    `,
                })}
            `}
        />
        <Leaf
            css={css`
                position: absolute;
                bottom: 0;
                left: 0;
                ${queryShit({
                    mobile: css`
                        display: none;
                    `,
                    tablet: css`
                        width: 155px;
                        transform: translate3d(530px, 0%, 0) rotate(119deg);
                    `,
                    desktop: css`
                        width: 300px;
                        transform: translate3d(450px, 40%, 0) rotate(129deg);
                    `,
                })}
            `}
        />
    </>
);

const WorldBackground = () => (
    <>
        <World
            css={css`
                position: absolute;
                top: 0;
                right: 0;

                ${queryShit({
                    mobile: css`
                        width: 250px;
                        transform: translate3d(10%, -60%, 0) rotate(-30deg);
                    `,
                    tablet: css`
                        width: 250px;
                        transform: translate3d(10%, -60%, 0) rotate(-30deg);
                    `,
                    desktop: css`
                        width: 350px;
                        transform: translate3d(10%, -60%, 0) rotate(-30deg);
                    `,
                })}
            `}
        />
        <World
            css={css`
                position: absolute;
                bottom: 0;
                left: 0;
                ${queryShit({
                    mobile: css`
                        display: none;
                    `,
                    tablet: css`
                        width: 225px;
                        transform: translate3d(405px, 20%, 0) rotate(-129deg);
                    `,
                    desktop: css`
                        width: 300px;
                        transform: translate3d(350px, 30%, 0) rotate(-129deg);
                    `,
                })}
            `}
        />
    </>
);

const DescriptionBackground: FC<MinistryConnection> = ({ backgroundImage }) => {
    if (backgroundImage === 'Leaf') {
        return <LeafBackground />;
    } else if (backgroundImage === 'World') {
        return <WorldBackground />;
    }
    return null;
};

export default DescriptionBackground;
