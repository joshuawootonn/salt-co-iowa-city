import React from 'react';
import { motion } from 'framer-motion';
import TextLink from '../../components/textLink';

import { css } from 'styled-components/macro';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';

const styles = {
    link: css`
        display: inline-block;
        margin-left: 40px;
    `,
};

const NonBoiger = () => {
    const isFontLoaded = useFontLoader();
    return (
        <motion.div
            animate={toVariant(isFontLoaded)}
            initial={isFontLoaded ? { opacity: 1 } : { opacity: 0 }}
            variants={{
                entered: { opacity: 1 },
                exited: { opacity: 0 },
            }}
        >
            <TextLink
                type="secondary"
                font="primary"
                size="small"
                to={'/who-we-are'}
                destinationType={'internal'}
                css={styles.link}
            >
                Who We are
            </TextLink>
            <TextLink
                type="secondary"
                font="primary"
                size="small"
                to={'/how-to-connect'}
                destinationType={'internal'}
                css={styles.link}
            >
                Get Connected
            </TextLink>
        </motion.div>
    );
};

export default NonBoiger;
