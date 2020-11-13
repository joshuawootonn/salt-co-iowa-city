import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './title';
import Text from './text';
import { css } from 'styled-components/macro';
import { useBoolean } from 'react-use';
import typography from './typography';
import TextLink from './textLink';

const IsVisible = ({ children }) => {
    const [isVisible, toggleVisible] = useBoolean(false);
    return (
        <div>
            <button
                css={css`
                    display: block;
                `}
                onClick={toggleVisible}
            >
                Toggle
            </button>
            {children(isVisible)}
        </div>
    );
};

storiesOf('Components', module).add('Typography', () => (
    <>
        <IsVisible>
            {(isVisible) => <Title v={isVisible}>Welcome to Salt Co.</Title>}
        </IsVisible>
        <IsVisible>
            {(isVisible) => (
                <Text css={typography.largeText.text} v={isVisible}>
                    We are college ministry composed of students who are defined
                    by Christ.
                </Text>
            )}
        </IsVisible>
    </>
));
