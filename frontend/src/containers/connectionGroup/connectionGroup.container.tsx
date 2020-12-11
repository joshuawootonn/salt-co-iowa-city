import React, { FC, useState } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import typography from '../../components/typography';
import ConnectionGroupCard from './connectionGroupCard';
import Masonry from 'react-masonry-css';
import { ConnectionGroupBlock } from '../../models/connectionGroup';
import { Title } from '../../components/title';
import Text from '../../components/text';
import { motion } from 'framer-motion';
import { toVariant } from '../../helpers/animation';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import { DayInput, dayOptions, GenderInput, genderOptions } from './inputs';
import dayjs from 'dayjs';
import RichText from '../../components/richText';

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
    title: css`
        white-space: normal;
    `,
    body: css`
        ${typography.bigText};
    `,
    formContainer: css`
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;

        & > div {
            margin-left: 20px;
        }

        & > div:first-child {
            width: 200px;
        }

        & > div:last-child {
            width: 200px;
        }

        margin-bottom: 40px;
    `,
    emptyContainer: css`
        min-height: 400px;
    `,
};

const ConnectionGroupContainer: FC<ConnectionGroupBlock> = ({
    title,
    description,
    groups,
    emptyText,
    emptyTitle,
    ...props
}) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0,
    });

    const [genderOption, setGenderOption] = useState(genderOptions[0]);
    const [dayOption, setDayOption] = useState(dayOptions[0]);

    const filteredGroups = groups
        .filter((group) =>
            genderOption.value === 'All'
                ? true
                : genderOption.value === group.gender
        )
        .filter((group) =>
            dayOption.value === 'All'
                ? true
                : dayOption.value === dayjs(group.dateTime).format('dddd')
        );

    return (
        <motion.div
            ref={ref}
            animate={toVariant(isVisible && isLoaded)}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.4,
                        staggerChildren: 0.2,
                    },
                },
            }}
            css={styles.root}
            {...props}
        >
            <div css={styles.titleContainer}>
                <Title css={styles.title} isOrchestrated={true} variant="small">
                    {title}
                </Title>
                <Text css={styles.body}>{description}</Text>
            </div>
            <div css={styles.formContainer}>
                <GenderInput value={genderOption} onChange={setGenderOption} />
                <DayInput value={dayOption} onChange={setDayOption} />
            </div>
            {filteredGroups.length === 0 ? (
                <div css={styles.emptyContainer}>
                    <RichText json={emptyTitle.json} />
                    <Text css={styles.body} elementType={'paragraph'}>
                        {emptyText.emptyText}
                    </Text>
                </div>
            ) : (
                <Masonry
                    breakpointCols={{
                        default: 3,
                        1140: 2,
                        675: 1,
                    }}
                    className="masonry-grid"
                    columnClassName="masonry-column"
                >
                    {filteredGroups.map((group, i) => (
                        <ConnectionGroupCard {...group} key={i} />
                    ))}
                </Masonry>
            )}
        </motion.div>
    );
};

export default ConnectionGroupContainer;
