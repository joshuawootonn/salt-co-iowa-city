import React from 'react';
import TextLink from '../../../components/textLink';
import { css } from 'styled-components/macro';
import typography from '../../../components/typography';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import slugify from '../../../helpers/slugify';
import { motion } from 'framer-motion';
import { IntersectionObserver } from '../../../components/IntersectionObserver';
import { toVariant } from '../../../helpers/animation';
import { useFontLoader } from '../../../context/fontLoader';

const ParagraphLink = (props) => (
    <TextLink css={typography.largeText.link} type={'largeText'} {...props}>
        {props.children}
    </TextLink>
);

const HyperLink = ({ content, data }) => (
    <ParagraphLink destinationType={'external'} href={data.uri}>
        {content[0].value}
    </ParagraphLink>
);

const EntryHyperLink = ({ content, data }) => {
    if (data.target.sys.contentType.sys.id === 'blockWhoWeAre') {
        return (
            <ParagraphLink destinationType={'internal'} to={`/who-we-are`}>
                {content[0].value}
            </ParagraphLink>
        );
    } else if (data.target.sys.contentType.sys.id === 'ministryDescription') {
        return (
            <ParagraphLink
                destinationType={'internal'}
                to={`/who-we-are/#${slugify(
                    data.target.fields.title['en-US']
                )}`}
            >
                {content[0].value}
            </ParagraphLink>
        );
    }
};

const animationProps = {
    initial: { opacity: 0, y: 50, rotate: '5deg' },
    variants: {
        entered: { y: 0, opacity: 1, rotate: '0deg' },
        exited: { y: 50, opacity: 0, rotate: '5deg' },
    },
    transition: { type: 'spring', duration: 1 },
};

const Paragraph = ({ content, data }, children) => (
    <motion.p {...animationProps} css={typography.largeText.text}>
        {children}
    </motion.p>
);

const WelcomeRichText = (props) => (
    <motion.div
        css={css`
            overflow: hidden;
        `}
    >
        {documentToReactComponents(props.json, {
            renderNode: {
                [INLINES.HYPERLINK]: HyperLink,
                [INLINES.ENTRY_HYPERLINK]: EntryHyperLink,
                [BLOCKS.PARAGRAPH]: Paragraph,
            },
        })}
    </motion.div>
);

export default WelcomeRichText;
