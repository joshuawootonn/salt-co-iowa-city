import React from 'react';
import { storiesOf } from '@storybook/react';
import { Title } from './title';
import Text from './text';
import { css } from 'styled-components/macro';
import { useBoolean } from 'react-use';
import typography from './typography';
import { toVariant } from '../helpers/animation';
import { motion } from 'framer-motion';

storiesOf('Components', module).add('Typography', () => {
    const [isVisible, toggleVisible] = useBoolean(false);
    return (
        <>
            <button
                css={css`
                    display: block;
                `}
                onClick={toggleVisible}
            >
                Toggle
            </button>
            <Title animate={toVariant(isVisible)}>Welcome to Salt Co.</Title>

            <Text
                animate={toVariant(isVisible)}
                css={typography.largeText.text}
            >
                We are college ministry composed of students who are defined by
                Christ.
            </Text>
        </>
    );
});
