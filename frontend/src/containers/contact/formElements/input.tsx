import React, { FC } from 'react';
import styles from './styles';
import { FieldProps } from 'formik';
import { css } from 'styled-components/macro';
import ValidationWrapper from './validationWrapper';

interface InputProps {
    placeholder: string;
}

const Input: FC<FieldProps<InputProps>> = ({ ...props }) => (
    <ValidationWrapper {...props}>
        <input
            css={styles.input}
            {...(props.field as any)}
            {...props}
            autoComplete="off"
        />
    </ValidationWrapper>
);

export default Input;
