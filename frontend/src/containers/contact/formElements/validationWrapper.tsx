import React, { FC } from 'react';
import styles from './styles';
import { css } from 'styled-components/macro';
import { FieldProps } from 'formik';

const ValidationWrapper: FC<FieldProps<any>> = ({
    field,
    form,
    children,
    ...props
}) => {
    return (
        <div css={styles.elementRoot} {...props}>
            {children}
            {form.errors[field.name] && form.touched[field.name] ? (
                <span>{form.errors[field.name]}</span>
            ) : (
                <span>{''}</span>
            )}
        </div>
    );
};

export default ValidationWrapper;
