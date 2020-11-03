import React from 'react';
import BlockArrow from '../../svgs/blockArrow.svg';
import styles from './styles';

const SubmitButton = () => {
    return (
        <button css={styles.button}>
            <BlockArrow />
        </button>
    );
};

export default SubmitButton;
