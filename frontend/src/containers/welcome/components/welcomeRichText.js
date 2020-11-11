import React from 'react';
import TextLink from '../../../components/textLink';
import { css } from 'styled-components/macro';
import typography from '../../../components/typography';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import slugify from '../../../helpers/slugify';
import { motion } from 'framer-motion';

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

const Paragraph = ({ content, data }, children) => (
    <motion.p
        initial={{ opacity: 0 }}
        variants={{
            entered: { y: 0, opacity: 1 },
            exited: { y: 100, opacity: 0 },
        }}
        transition={{ bounce: 0 }}
        css={typography.largeText.text}
    >
        {children}
    </motion.p>
);

const WelcomeRichText = (props) => (
    <motion.div
        css={css`
            overflow: hidden;
        `}
        {...props}
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
