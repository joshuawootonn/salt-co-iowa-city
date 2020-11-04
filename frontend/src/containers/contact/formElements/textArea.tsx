import React, { FC } from 'react';
import styles from './styles';

import { css } from 'styled-components/macro';
import { FieldProps } from 'formik';

interface TextAreaProps {
    placeholder: string;
}
const TextArea: FC<FieldProps<TextAreaProps>> = ({ field, form, ...props }) => {
    return <textarea css={styles.textArea} {...(field as any)} {...props} />;
};
export default TextArea;
