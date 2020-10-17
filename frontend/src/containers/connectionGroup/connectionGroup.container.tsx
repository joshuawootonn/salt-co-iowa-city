import React, { FC } from 'react';

import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import typography from '../../components/typography';
import ConnectionGroupCard from './connectionGroupCard';
import Masonry from 'react-masonry-css';
import { ConnectionGroupBlock } from '../../models/connectionGroup';

const styles = {
    root: css`
        ${layout.container};

        .masonry-grid {
            display: flex;
            margin-left: -30px; /* gutter size offset */
            width: auto;
        }
        .masonry-column {
            padding-left: 30px; /* gutter size */
            background-clip: padding-box;

            & > div {
                margin-bottom: 30px;
            }
        }
    `,
    titleContainer: css`
        margin-bottom: 40px;
    `,
};

const ConnectionGroupContainer: FC<ConnectionGroupBlock> = ({
    title,
    description,
    groups,
    ...props
}) => (
    <div css={styles.root} {...props}>
        <div css={styles.titleContainer}>
            <h2 css={typography.title2}>{title}</h2>
            <p css={typography.bigText}>{description}</p>
        </div>
        <Masonry
            breakpointCols={3}
            className="masonry-grid"
            columnClassName="masonry-column"
        >
            {groups.map((group, i) => (
                <ConnectionGroupCard {...group} key={i} />
            ))}
        </Masonry>
    </div>
);

export default ConnectionGroupContainer;
