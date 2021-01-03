import React, { FC, useEffect, useState } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import typography from '../../components/typography';
import { ConnectionGroupBlock } from '../../models/connectionGroup';
import { Title } from '../../components/title';
import Text from '../../components/text';
import { motion, useAnimation } from 'framer-motion';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import { DayInput, dayOptions, GenderInput, genderOptions } from './inputs';
import dayjs from 'dayjs';
import RichText from '../../components/richText';
import ConnectionGroup from './connectionGroup';
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

const ConnectionGroupContainer: FC<{
    connectionGroupBlock: ConnectionGroupBlock;
}> = ({
    connectionGroupBlock: { title, description, groups, emptyText, emptyTitle },
    ...props
}) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0,
    });

    const controls = useAnimation();

    const [genderOption, setGenderOption] = useState(null);
    const [dayOption, setDayOption] = useState(null);

    // I don't have energy for this shitty shit
    const filteredGroups = groups
        .filter((group) =>
            !genderOption
                ? true
                : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                genderOption.value === genderOptions[0].value
                ? true // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                : // @ts-ignore
                  genderOption.value === group.gender
        )
        .filter((group) =>
            !dayOption
                ? true
                : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                dayOption.value === dayOptions[0].value
                ? true
                : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  dayOption.value === dayjs(group.dateTime).format('dddd')
        );

    useEffect(() => {
        if (isVisible && isLoaded) {
            controls.start('entered');
        } else {
            controls.start('exited');
        }
    }, [isVisible, isLoaded, JSON.stringify(filteredGroups)]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            variants={{
                entered: {
                    transition: {
                        staggerChildren: 0.08,
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
                <Text isOrchestrated={true} css={styles.body}>
                    {description}
                </Text>
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
                <ConnectionGroup groups={filteredGroups} />
            )}
        </motion.div>
    );
};

export default ConnectionGroupContainer;
