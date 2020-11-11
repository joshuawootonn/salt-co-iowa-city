import React from 'react';
import { css } from 'styled-components/macro';
import typography from '../../../components/typography';
import { motion } from 'framer-motion';

const styles = {
    title: css`
        margin-bottom: 20px;
        overflow: hidden;

        h1 {
            ${typography.title1};
            white-space: nowrap;
        }
    `,
};
const Title = (props) => (
    <motion.div css={styles.title}>
        <motion.h1
            initial={{ opacity: 0 }}
            variants={{
                entered: { y: 0, opacity: 1 },
                exited: { y: 100, opacity: 0 },
            }}
            transition={{ bounce: 0 }}
        >
            {props.title}
        </motion.h1>
    </motion.div>
);

export default Title;
