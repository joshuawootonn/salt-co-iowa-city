import React, { FC } from 'react';
import styles from './styles';
import { css } from 'styled-components/macro';
import { FieldProps } from 'formik';
import ValidationWrapper from './validationWrapper';

interface TextAreaProps {
    placeholder: string;
}
const TextArea: FC<FieldProps<TextAreaProps>> = (props) => (
    <ValidationWrapper {...props}>
        <textarea css={styles.textArea} {...(props.field as any)} {...props} />
    </ValidationWrapper>
);
export default TextArea;
