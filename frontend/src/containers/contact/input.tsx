import React, { FC } from 'react';
import styles from './styles';

interface InputProps {
    placeholder: string;
}
const Input: FC<InputProps> = (props) => {
    return <input css={styles.input} {...props} />;
};
export default Input;
