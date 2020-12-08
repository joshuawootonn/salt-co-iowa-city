import React, { FC, useEffect, useState } from 'react';
import { css } from 'styled-components/macro';
import LogoLink from '../../components/logoLink';
import useScreenType, { queryShit } from '../../components/useScreenType';
import BoigerButton from './boigerButton';
import NonBoiger from './nonboiger';
import IconAction from '../../components/iconAction';
import { FooterBlock } from '../../models/footer';
import { toVariant } from '../../helpers/animation';
import ExtendedNavigationContainer from '../extendedNavigation';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactFocusLock from 'react-focus-lock';

const styles = {
    root: css`
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 70px;

        padding: 0 80px;
        width: 100vw;
        top: 0;
        z-index: 1001;
        ${queryShit({
            mobile: css`
                margin-top: 25px;
                padding: 0 25px;
            `,
            tablet: css`
                margin-top: 25px;
                padding: 0 40px;
            `,
            desktop: css`
                margin-top: 40px;
                padding: 0 70px;
            `,
        })}
    `,
    grow: css`
        flex-grow: 1;
    `,
};

const Root = styled(motion.div)`
    position: fixed;
    z-index: 1000;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    transform: translate3d(-100%, 0, 0);
    background-color: ${({ theme }) => theme.colors.background};

    ${queryShit({
        mobile: css`
            padding-top: 120px;
        `,
        tablet: css`
            padding-top: 130px;
        `,
    })}
`;

const HeaderContainer: FC<FooterBlock> = (props) => {
    const media = useScreenType();
    const isBoiger = media === 'mobile' || media === 'tablet';

    const [isHeaderOpen, setIsHeaderOpen] = useState(false);

    const toggleMobileNavigation = () => setIsHeaderOpen((prev) => !prev);

    useEffect(() => {
        if (isHeaderOpen) {
            document.body.classList.add('lock-scroll');
        } else {
            document.body.classList.remove('lock-scroll');
        }
    }, [isHeaderOpen]);

    const variants = {
        exited: {
            x: '-100%',
        },
        entered: {
            x: '0%',
        },
    };
    return (
        <>
            <div css={styles.root}>
                <LogoLink to={'/'} />
                <div css={styles.grow} />
                {isBoiger ? (
                    <BoigerButton onClick={toggleMobileNavigation} />
                ) : (
                    <NonBoiger />
                )}
            </div>
            {isBoiger && (
                <ReactFocusLock group={'main'} disabled={!isHeaderOpen}>
                    <Root
                        transition={{
                            ease: [0.26, 0.49, 0.18, 0.88],
                            duration: 0.5,
                        }}
                        initial={'exited'}
                        animate={toVariant(isHeaderOpen)}
                        variants={variants}
                    >
                        <ExtendedNavigationContainer
                            {...props}
                            type={'mobileNav'}
                        />
                    </Root>
                </ReactFocusLock>
            )}
        </>
    );
};

export default HeaderContainer;
