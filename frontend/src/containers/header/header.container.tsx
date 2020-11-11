import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import LogoLink from '../../components/logoLink';
import useScreenType, { queryShit } from '../../components/useScreenType';
import Boiger from './boiger';
import NonBoiger from './nonboiger';

const styles = {
    root: css`
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 70px;

        margin: 40px auto 0 auto;
        padding: 0 80px;
        width: 100vw;
        z-index: 10;
        ${queryShit({
            mobile: css`
                margin: 15px auto 0 auto;
                padding: 0 15px;
            `,
        })}
    `,
    grow: css`
        flex-grow: 1;
    `,
};

const HeaderContainer: FC = () => {
    const media = useScreenType();
    const isBoiger = media === 'mobile' || media === 'tablet';

    return (
        <div css={styles.root}>
            <LogoLink to={'/'} />
            <div css={styles.grow} />
            {isBoiger ? <Boiger /> : <NonBoiger />}
        </div>
    );
};

export default HeaderContainer;
