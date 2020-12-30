import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../../components/layout';
import styled from 'styled-components';
import Doves from './doves';
import { FormUIPhase } from '../types';

export interface RootInterface {
    delay?: number;
    formUIPhase: FormUIPhase;
}

const Component = styled(motion.div)`
    ${layout.container};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 70vh;
`;

const Root: FC<RootInterface> = (props) => (
    <Component
        initial={'exited'}
        animate={'entered'}
        exit={'exited'}
        variants={{
            entered: {
                transition: {
                    delayChildren: props.delay || 0,
                    staggerChildren: 0.06,
                },
            },
            exited: {
                transition: {
                    when: 'afterChildren',
                },
            },
        }}
    >
        <Doves formUIPhase={props.formUIPhase} />
        {props.children}
    </Component>
);

export default Root;
