import React, { FC } from 'react';
import styles from './styles';
import { FieldProps } from 'formik';

import { css } from 'styled-components/macro';

interface InputProps {
    placeholder: string;
}
const Input: FC<FieldProps<InputProps>> = ({ field, form, ...props }) => {
    console.log(props);
    return <input css={styles.input} {...(field as any)} {...props} />;
};
export default Input;
