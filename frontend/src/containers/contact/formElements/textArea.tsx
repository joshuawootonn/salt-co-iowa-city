import React, { FC } from 'react';
import styles from './styles';
import { css } from 'styled-components/macro';
import { FieldProps } from 'formik';
import ValidationWrapper from './validationWrapper';
import AnimationWrapper from './animationWrapper';

interface TextAreaProps {
    placeholder: string;
}
const TextArea: FC<FieldProps<TextAreaProps>> = (props) => (
    <ValidationWrapper {...props}>
        <AnimationWrapper>
            <textarea
                css={styles.textArea}
                {...(props.field as any)}
                {...props}
            />
        </AnimationWrapper>
    </ValidationWrapper>
);
export default TextArea;
