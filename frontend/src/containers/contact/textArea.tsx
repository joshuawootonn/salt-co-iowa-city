import React, { FC } from 'react';
import styles from './styles';

import { css } from 'styled-components/macro';

interface TextAreaProps {
    placeholder: string;
}
const TextArea: FC<TextAreaProps> = (props) => {
    return <textarea css={styles.textArea} {...props} />;
};
export default TextArea;
