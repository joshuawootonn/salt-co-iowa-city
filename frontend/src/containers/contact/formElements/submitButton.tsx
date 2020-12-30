import React from 'react';
import BlockArrow from '../../../svgs/blockArrow.svg';
import styles from './styles';
import { css } from 'styled-components/macro';
import AnimationWrapper from './animationWrapper';

const SubmitButton = () => {
    return (
        <button type="submit" css={styles.button}>
            <AnimationWrapper>
                <BlockArrow />
            </AnimationWrapper>
        </button>
    );
};

export default SubmitButton;
