import React from 'react';
import BlockArrow from '../../../svgs/blockArrow.svg';
import styles from './styles';
import { css } from 'styled-components/macro';

const SubmitButton = () => {
    return (
        <button type="submit" css={styles.button}>
            <BlockArrow />
        </button>
    );
};

export default SubmitButton;
